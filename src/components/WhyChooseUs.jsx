import { FaRocket, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// JSON data with images
const cardsData = [
  {
    icon: <FaRocket className="text-4xl mb-4" style={{ color: "#23A455" }} />,
    title: "Early Development",
    description:
      "Begin laying the groundwork for future success early on. By starting young, individuals can develop essential skills, build confidence, and acquire knowledge that sets the stage for lifelong learning and achievement. This early foundation empowers future leaders, innovators, and entrepreneurs to reach their full potential..",
    images: [
      // "/images/early_adoption.jpg",
      "/images/early_development.jpg",
      "/images/Early_development2.jpg",
    ],
    // button: {
    //   text: "Learn More",
    //   style: {
    //     backgroundColor: "#23A455",
    //     color: "#fff",
    //   },
    // },
    button: null, // No button for this card
  },
  {
    icon: (
      <FaChalkboardTeacher
        className="text-4xl mb-4"
        style={{ color: "#23A455" }}
      />
    ),
    title: "Holistic Learning",
    description:
      "Our programs focus on essential aspects of entrepreneurship, including idea generation, business planning, market research, branding, and financial management. We equip students with the skills to develop their business ideas and successfully launch them in today's competitive market..",
    images: [
      "images/holistic_learning.jpeg",
      "images/holistic_learning2.jpg",
      "images/holistic_learning3.jpg",
    ],
    // button: {
    //   text: "Learn More",
    //   style: {
    //     backgroundColor: "#23A455",
    //     color: "#fff",
    //   },
    // },
    button: null, // No button for this card
  },
  {
    icon: <FaUsers className="text-4xl mb-4" style={{ color: "#23A455" }} />,
    title: "Digital Skill Labs",
    description:
      "he skill labs offer a wide range of hands-on training in high-demand trades and services. Students can learn Plumbing, Tiling, POP Installation, Event Decoration, Bakery and Confectionery, Hairstyling, Makeup, Interior Design, and GSM Repairs, preparing them for various skilled professions in the market..",
    images: [
      "/images/african_bakers.jpeg",
      "/images/african_plumber.webp",
      "/images/gsm_repair.jpeg",
    ],
    button: null, // No button for this card
  },
];

const WhyChooseUs = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(cardsData.length).fill(0)
  );

  useEffect(() => {
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
    if (inView3) controls3.start("visible");
  }, [controls1, controls2, controls3, inView1, inView2, inView3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndexes) =>
        prevIndexes.map((index, i) =>
          index === cardsData[i].images.length - 1 ? 0 : index + 1
        )
      );
    }, 3000); // Change images every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section
      className="py-20 text-center min-h-screen"
      style={{ backgroundColor: "#fffaf3" }}
    >
      <h2
        className="text-3xl text-emerald-800 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10"
        // style={{ color: "#23A455" }}
      >
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            ref={index === 0 ? ref1 : index === 1 ? ref2 : ref3}
            variants={cardVariants}
            initial="hidden"
            animate={
              index === 0 ? controls1 : index === 1 ? controls2 : controls3
            }
            className="p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            style={{ backgroundColor: "white" }}
          >
            {card.icon}
            <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-72 mb-4 overflow-hidden rounded-lg">
              <motion.img
                key={currentImageIndex[index]}
                src={card.images[currentImageIndex[index]]}
                alt={card.title}
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000"
              />
            </div>
            <h3 className="text-xl text-emerald-800 sm:text-2xl md:text-3xl font-semibold mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base md:text-lg lg:text-xl">
              {card.description}
            </p>
            {card.button && (
              <button
                className="px-6 py-2 rounded-lg transition duration-300"
                style={card.button.style}
              >
                {card.button.text}
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
