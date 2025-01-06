import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 50, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1.5 } },
  };

  return (
    <motion.section
      className="py-16 bg-white min-h-screen md:mt-40"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto md:gap-4 flex flex-col md:flex-row items-center h-full">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          variants={imageVariants}
        >
          <img
            src="/images/hero_pic.jpg"
            alt="Welcome Image"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 p-6"
          variants={textVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Entrepreneurship Training
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Welcome To CTY
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Introducing BMI- CTY Academy: This academy provides platform for a
            child to get basic training and information on entrepreneurship to
            become a nation builder. The learning creates awareness on wealth
            creation, talent enhancement and business development. It
            contributes toward capacity development and building right mentality
            for innovations.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Young learners start early to get additional training, knowledge and
            attributes needed to bring out their best abilities in the context
            of starting up a new business and monetizing their talents.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6 font-semibold">
            Catch Them Young Entrepreneurship Training
          </p>
          <motion.button
            className="px-6 py-2 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: "#23A455", color: "#fff" }}
            variants={buttonVariants}
            whileHover={{ boxShadow: "0 0 10px 5px #F5F5DC" }}
          >
            Explore Learning
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Welcome;
