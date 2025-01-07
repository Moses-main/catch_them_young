import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import mentorshipAnimation from "../animations/mentorship.json";
import howItWorksAnimation from "../animations/how-it-works.json";
import benefitsAnimation from "../animations/benefits.json";
import getStartedAnimation from "../animations/get-started.json";

const Mentorship = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const sectionsData = [
    {
      title: "Introduction to Our Mentorship Program",
      animation: mentorshipAnimation,
      description:
        "At BMI-CTY Academy, we believe that mentorship is a key ingredient for entrepreneurial success. Our mentorship program connects young aspiring entrepreneurs with experienced mentors who provide guidance, support, and expertise to help them navigate their entrepreneurial journey.",
      image: "../images/intro_to_mentorship.jpg",
    },
    {
      title: "How the Program Works",
      animation: howItWorksAnimation,
      description:
        "Our mentorship program is designed to cater to the needs of young entrepreneurs at various stages of their journey. From conceptualizing ideas to scaling businesses, we provide a tailored experience that fits the unique challenges of each mentee.",
      list: [
        "1-on-1 mentorship sessions with experienced business leaders.",
        "Goal setting and strategic planning for business development.",
        "Continuous feedback and progress tracking to ensure success.",
        "Access to a network of entrepreneurs and business professionals.",
      ],
      image: "../images/how_it_works.jpg",
    },
    {
      title: "Benefits of Being a Mentee",
      animation: benefitsAnimation,
      description:
        "As a mentee in the BMI-CTY Mentorship Program, you gain access to invaluable resources and insights that will set you on the path to success. Our mentors are dedicated to your growth and offer personalized guidance tailored to your specific needs and goals.",
      image: "../images/benefits_of_being_a_mentee.jpg",
    },
    {
      title: "How to Get Started",
      animation: getStartedAnimation,
      description:
        "Ready to take your entrepreneurial skills to the next level? Follow these easy steps to get started:",
      list: [
        "Sign up for the BMI-CTY Mentorship Program on our website.",
        "Complete the mentee application form to tell us about your goals.",
        "Match with a mentor based on your interests and goals.",
        "Schedule your first mentorship session and begin your journey.",
      ],
      image: "../images/get_started.jpg",
    },
  ];

  return (
    <div className="container mt-20 mx-auto py-12 px-6 bg-[#f9f5f0]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:text-3xl  font-extrabold md:mt-8 text-center mb-8 text-emerald-700"
      >
        Welcome to BMI-CTY Mentorship Program
      </motion.h1>
      {sectionsData.map((section, index) => (
        <motion.section
          key={index}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sectionVariants}
          className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg bg-white"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg w-full md:w-full object-cover"
              />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="md:text-3xl font-semibold text-center md:text-center md:mt-4 text-emerald-700">
                {section.title}
              </h2>
              <div className="relative">
                {/* Lottie animation */}
                <Lottie
                  animationData={section.animation}
                  className="absolute inset-0 w-full h-full object-cover z-0 scale-75 md:scale-100"
                />
                {/* Description overlay */}
                <p className="md:text-xl  text-sm text-justify md:text-justify text-center md:text-left text-gray-700 relative z-10 bg-opacity-80 bg-white p-4 rounded-lg">
                  {section.description}
                </p>
                {section.list && (
                  <ul className="md:text-xl text-sm text-justify text-gray-700 text-center md:text-left list-disc list-inside relative z-10 bg-opacity-80 bg-white p-4 rounded-lg">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Call-to-Action Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={sectionVariants}
        className="text-center mb-10 bg-white shadow-lg p-6 rounded-lg"
      >
        <h2 className="md:text-3xl font-semibold text-emerald-700 mb-4">
          Start Your Mentorship Journey Now
        </h2>
        <p className="md:text-xl text-sm md:w-[70%] md:m-auto text-justify text-gray-700 md:mb-6 mb-6 md:text-center md:my-10">
          Don’t miss the opportunity to work with the best in the business.
          Subscribe to our mentorship program and start receiving personalized
          support to help you achieve your entrepreneurial dreams.
        </p>
        <a
          href="/mentorship-signup"
          className="bg-emerald-600 text-white  px-6 py-2 rounded-md shadow-md hover:bg-emerald-800"
        >
          Get Started
        </a>
      </motion.section>
    </div>
  );
};

export default Mentorship;
