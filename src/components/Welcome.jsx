import React from "react";
import { motion } from "framer-motion";
import "../App.css";
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
      className="py-16 bg-white min-h-screen md:mt-20"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      {/* First Image Section */}
      <motion.div
        className="relative flex justify-center mb-6"
        variants={imageVariants}
      >
        <img
          src="/images/hero_pic.jpg"
          alt="Welcome Image"
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />

        {/* Animation Text Over Image */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
          <div className="typewriter-container text-white font-bold text-2xl md:text-8xl">
            <p className="typewriter-text">
              Welcome to BMI Entrepreneurship Training
            </p>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto md:gap-4 flex flex-col items-center md:flex-row-reverse h-full">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 p-6"
          variants={textVariants}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-emerald-800">
            Entrepreneurship Training
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-emerald-800 mb-4">
            Welcome To CTY
          </h3>
          <p className="text-base md:text-lg text-justify text-gray-600 mb-6">
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
            className="px-6 py-2 rounded-lg font-semibold transition-colors text-white bg-emerald-800"
            variants={buttonVariants}
            whileHover={{ boxShadow: "0 0 10px 5px #F5F5DC" }}
          >
            Explore Learning
          </motion.button>
        </motion.div>
      </div>

      {/* Mentorship Program Section */}
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="md:text-3xl text-lg font-bold text-emerald-800 mb-6">
          Empowering the Next Generation of Entrepreneurs
        </h2>
        <p className="md:text-lg text-gray-700 text-sm mb-6">
          The BMI-CTY Academy Mentorship Program is more than guidance—it's a
          partnership built on growth, innovation, and shared aspirations. We
          are committed to nurturing the next generation of leaders by
          providing:
        </p>
        <div className="md:flex md:gap-10 mb-8">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="/images/intro_to_mentorship.jpg"
              alt="One-on-One Mentorship"
              className="w-full md:h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h4 className="font-semibold text-lg text-emerald-800">
              One-on-One Mentorship
            </h4>
            <p className="text-gray-600 text-sm">
              Tailored advice and insights from industry leaders who have walked
              the path of entrepreneurship.
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="/images/holistic_learning.jpeg"
              alt="Real-World Knowledge"
              className="w-full object-cover md:h-80 rounded-lg shadow-lg mb-4"
            />
            <h4 className="font-semibold text-lg text-emerald-800">
              Real-World Knowledge
            </h4>
            <p className="text-gray-600 text-sm">
              Guidance on navigating challenges, identifying opportunities, and
              implementing innovative solutions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/access_to_resource.jpg"
              alt="Access to Resources"
              className="w-full object-cover md:h-80 rounded-lg shadow-lg mb-4"
            />
            <h4 className="font-semibold text-lg text-emerald-800">
              Access to Resources
            </h4>
            <p className="text-gray-600 text-sm">
              Exclusive tools, case studies, and proven strategies to support
              your entrepreneurial journey.
            </p>
          </div>
        </div>

        <h3 className="md:text-2xl text-lg font-semibold text-emerald-800 mb-6">
          Why Mentorship Matters
        </h3>
        <p className="md:text-lg  text-gray-700 mb-6 text-justify">
          At BMI-CTY Academy, we believe mentorship is the cornerstone of
          success. Research has shown that mentorship improves decision-making,
          enhances problem-solving, and significantly boosts the likelihood of
          entrepreneurial success. By connecting with experienced mentors, young
          entrepreneurs can learn to:
        </p>
        <ul className="list-disc text-left md:text-lg text-gray-600 px-3 mx-auto max-w-2xl mb-6">
          <li>Avoid common pitfalls.</li>
          <li>Develop actionable business strategies.</li>
          <li>Build resilience and confidence.</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Welcome;
