import React from "react";
import { motion } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";

const Welcome = () => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 }, // Adjusted delay
    },
    exit: { opacity: 0, y: -50, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.8 }, // Adjusted delay for staggered effect
    },
    exit: { opacity: 0, x: 100, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 }, // Adjusted delay
    },
    exit: { opacity: 0, y: -50, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 1.2 }, // Adjusted delay for staggered effect
    },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="py-16 min-h-screen md:mt-20 bg-[#f3f4f6] overflow-visible" // Changed overflow to visible
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* First Image Section */}
      <motion.div
        className="relative flex justify-center mb-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit="exit"
        variants={imageVariants}
      >
        <img
          src="/images/hero_pic.png"
          alt="Welcome Image"
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
          <div className="typewriter-container text-white font-bold text-2xl md:text-8xl">
            <p className="typewriter-text">
              Welcome to BMI Entrepreneurship Training
            </p>
            <TypewriterEffect />
          </div>
        </div>
      </motion.div>
      {/* Text Section */}
      <motion.div
        className="container gap-4 mx-auto flex flex-col items-center md:flex-row-reverse h-full mb-24 mt-16" // Added mt-16 for top spacing
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit="exit"
        variants={containerVariants}
      >
        <div className="text-center md:text-left w-full ml-4  md:w-1/2 md:p-6 p-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-emerald-800">
            Entrepreneurship Training
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-justify text-gray-600 px-2 sm:px-4 py-6 sm:py-12 font-bold mb-6">
            BMI-CTY Academy provides platform for a child to get basic training
            and information on entrepreneurship to become a nation builder.
          </p>
          <motion.button
            className="px-6 py-2 rounded-lg font-semibold transition-colors text-white bg-emerald-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            variants={buttonVariants}
            whileHover={{ boxShadow: "0 0 10px 5px #F5F5DC" }}
          >
            Explore Learning
          </motion.button>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img
            src="/images/financial-literacy.jpg"
            alt="Welcome Side Image"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </motion.div>

      {/* Mentorship Program Section */}
      <motion.div
        className="container mx-auto py-16 px-4 text-center mt-12 lg:py-24 lg:px-8 xl:py-32 xl:px-12" // Adjusted padding for larger screens
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit="exit"
        variants={containerVariants}
      >
        <h2 className="text-md md:text-3xl lg:text-4xl xl:text-5xl font-bold text-emerald-800 mb-6">
          Empowering the Next Generation of Entrepreneurs
        </h2>
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-justify font-bold text-gray-700 mb-6">
          The BMI-CTY Academy Mentorship Program is more than guidance—it's a
          partnership built on growth, innovation, and shared aspirations.
        </p>
        <div className="flex flex-col md:flex-row md:gap-10 mb-8">
          {/* Card Section */}
          {[
            {
              img: "/images/intro_to_mentorship.jpg",
              title: "One-on-One Mentorship",
              desc: "Tailored advice and insights from industry leaders.",
            },
            {
              img: "/images/holistic_learning.jpeg",
              title: "Real-World Knowledge",
              desc: "Guidance on navigating challenges and opportunities.",
            },
            {
              img: "/images/access_to_resource.jpg",
              title: "Access to Resources",
              desc: "Exclusive tools to support your entrepreneurial journey.",
            },
          ].map(({ img, title, desc }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center mb-6 md:mb-0 border-2 border-emerald-800 rounded-md hover:scale-105 hover:shadow-lg transition-all duration-300 p-4 lg:p-6 xl:p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              exit="exit"
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.5 + index * 0.2 },
                },
                exit: {
                  opacity: 0,
                  x: index % 2 === 0 ? 100 : -100,
                  transition: { duration: 1 },
                },
              }}
            >
              <img
                src={img}
                alt={title}
                className="w-full object-cover   h-64 sm:h-70 md:h-80  xl:h-96 rounded-lg shadow-lg mb-4"
              />
              <h4 className="font-semibold text-lg lg:text-xl xl:text-2xl text-emerald-800">
                {title}
              </h4>
              <p className="text-gray-600 font-bold text-sm lg:text-base xl:text-lg">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Welcome;
