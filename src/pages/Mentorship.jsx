import React, { useEffect, useState } from "react";
import { motion } from "motion/react"; // Updated import
import Lottie from "lottie-react";
import mentorshipAnimation from "../animations/mentorship.json";
import howItWorksAnimation from "../animations/how-it-works.json";
import benefitsAnimation from "../animations/benefits.json";
import getStartedAnimation from "../animations/get-started.json";

const Mentorship = () => {
  const [showMore, setShowMore] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const sectionsData = [
    {
      title: "Welcome to BMI-CTY Academy Mentorship Program",
      image: "/images/hero_pic.jpg",
      animation: mentorshipAnimation,
      description: "",
      list: [],
      button: {
        text: "Join Us Today",
        action: "/join-us",
      },
      content: [
        {
          type: "paragraph",
          text: "At BMI-CTY Academy, we understand that entrepreneurship is a journey filled with opportunities, challenges, and decisions that shape success. Our mentorship program is designed to bridge the gap between ambition and achievement by offering young aspiring entrepreneurs access to seasoned experts, practical insights, and a supportive network.",
        },
        {
          type: "heading",
          text: "Empowering the Next Generation of Entrepreneurs",
        },
        {
          type: "paragraph",
          text: "The BMI-CTY Academy Mentorship Program is more than guidance—it's a partnership built on growth, innovation, and shared aspirations. We are committed to nurturing the next generation of leaders by providing:",
        },
        {
          type: "list",
          items: [
            "One-on-One Mentorship: Tailored advice and insights from industry leaders who have walked the path of entrepreneurship.",
            "Real-World Knowledge: Guidance on navigating challenges, identifying opportunities, and implementing innovative solutions.",
            "Access to Resources: Exclusive tools, case studies, and proven strategies to support your entrepreneurial journey.",
            "A Thriving Network: A community of like-minded individuals and mentors eager to collaborate, inspire, and succeed together.",
          ],
        },
        {
          type: "heading",
          text: "Why Mentorship Matters",
        },
        {
          type: "paragraph",
          text: "At BMI-CTY Academy, we believe mentorship is the cornerstone of success. Research has shown that mentorship improves decision-making, enhances problem-solving, and significantly boosts the likelihood of entrepreneurial success. By connecting with experienced mentors, young entrepreneurs can learn to:",
        },
        {
          type: "list",
          items: [
            "Avoid common pitfalls.",
            "Develop actionable business strategies.",
            "Build resilience and confidence.",
          ],
        },
        {
          type: "heading",
          text: "Who Can Join?",
        },
        {
          type: "paragraph",
          text: "Our mentorship program is open to young entrepreneurs with innovative ideas and the drive to turn them into successful ventures. Whether you're at the ideation stage or scaling your business, our mentors are equipped to provide the guidance you need to excel.",
        },
        {
          type: "heading",
          text: "Join Us Today",
        },
        {
          type: "paragraph",
          text: "Discover the power of mentorship with BMI-CTY Academy. Embark on a transformative journey, harness your potential, and turn your entrepreneurial dreams into reality. Together, we build the leaders of tomorrow.",
        },
      ],
    },
    {
      title: "How the Program Works",
      image: "/images/early_adoption.jpg",
      animation: howItWorksAnimation,
      description: "",
      list: [],
      button: {
        text: "Apply Now",
        action: "/apply-now",
      },
      content: [
        {
          type: "paragraph",
          text: "Our mentorship program supports young entrepreneurs with tailored mentorship, providing strategic planning and goal-setting assistance for business development.",
        },
        {
          type: "heading",
          text: "Key Program Features",
        },
        {
          type: "list",
          items: [
            "1-on-1 mentorship sessions with experienced business leaders.",
            "Goal setting and strategic planning for business development.",
            "Continuous feedback and progress tracking.",
            "Access to a network of entrepreneurs and business professionals.",
          ],
        },
        {
          type: "heading",
          text: "Program Benefits",
        },
        {
          type: "paragraph",
          text: "By joining our program, you gain valuable insights and real-world knowledge from industry leaders. Our program is designed to guide you at every stage of your entrepreneurial journey, from ideation to scaling your business. You will have direct access to resources that can accelerate your growth and make your business more sustainable and impactful.",
        },
        {
          type: "heading",
          text: "Who Should Apply?",
        },
        {
          type: "paragraph",
          text: "This program is designed for young entrepreneurs with innovative ideas, those seeking guidance on turning those ideas into successful ventures, or those looking to scale existing businesses. If you are eager to learn, grow, and be part of a supportive entrepreneurial community, our mentorship program is for you.",
        },
        {
          type: "heading",
          text: "Start Your Journey Today",
        },
        {
          type: "paragraph",
          text: "Join us today to begin your mentorship journey. Tap into the resources, guidance, and network that will help you take your business idea to the next level. The future of entrepreneurship starts with you, and we’re here to help you realize your potential.",
        },
      ],
    },
  ];

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mt-20 mx-auto py-12 px-6 bg-[#f9f5f0]">
      {sectionsData.map((section, index) => (
        <motion.section
          key={index}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sectionVariants}
          className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg bg-white flex flex-col justify-center"
        >
          <div className="flex flex-col items-center space-y-4">
            {/* Image Section */}
            <div className="w-full">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg w-full object-cover"
              />
            </div>

            {/* Text Content Section */}
            <div className="w-full space-y-4 flex flex-col justify-center">
              <h2 className="md:text-3xl font-semibold text-center text-emerald-700">
                {section.title}
              </h2>

              <div className="relative">
                {/* Lottie animation */}
                <Lottie
                  animationData={section.animation}
                  className="absolute inset-0 w-full h-full object-cover z-0 scale-75 md:scale-100"
                />

                {/* Dynamic Content */}
                <div className="relative z-10 bg-opacity-80 bg-white p-4 rounded-lg">
                  {section.content.map((item, i) => {
                    if (item.type === "paragraph") {
                      return (
                        <motion.p
                          key={i}
                          className="md:text-xl text-sm text-justify md:text-justify text-gray-700"
                          variants={contentVariants}
                        >
                          {item.text}
                        </motion.p>
                      );
                    } else if (item.type === "heading") {
                      return (
                        <motion.h3
                          key={i}
                          className="md:text-2xl font-semibold text-emerald-700 mt-4"
                          variants={contentVariants}
                        >
                          {item.text}
                        </motion.h3>
                      );
                    } else if (item.type === "list") {
                      return (
                        <motion.ul
                          key={i}
                          className="md:text-xl text-sm text-justify text-gray-700 text-center md:text-left list-disc list-inside mt-4"
                          variants={contentVariants}
                        >
                          {item.items.map((listItem, j) => (
                            <li key={j}>{listItem}</li>
                          ))}
                        </motion.ul>
                      );
                    }
                  })}

                  {/* Mobile Toggle */}
                  {showMore && (
                    <button
                      className="text-center text-emerald-600 hover:text-emerald-800 mt-4"
                      onClick={handleToggle}
                    >
                      Show Less
                    </button>
                  )}
                  {!showMore && (
                    <button
                      className="text-center text-emerald-600 hover:text-emerald-800 mt-4"
                      onClick={handleToggle}
                    >
                      Show More
                    </button>
                  )}
                </div>

                {/* Render Button if exists */}
                {section.button && (
                  <motion.div
                    variants={contentVariants}
                    className="flex justify-center mt-8"
                  >
                    <a
                      href={section.button.action}
                      className="bg-emerald-700 text-white px-4 py-2 rounded-full hover:bg-emerald-800"
                    >
                      {section.button.text}
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default Mentorship;
