import React from "react";
import { motion } from "framer-motion";

const WelcomeBMI = () => {
  return (
    <section className="py-16 bg-[#fdf1e1]">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-emerald-800">
            Our Mentorship Process
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-800 mb-4">
            At BMI-CTY Academy
          </h3>
          <p className="text-gray-600 text-justify text-base sm:text-lg md:text-xl mb-6">
            We believe in a structured yet flexible approach to mentorship.
            Here's how the process works:
          </p>
          <ul className="text-gray-600 text-justify text-base sm:text-lg md:text-xl mb-6 list-disc list-inside">
            <li>
              <strong>Sign Up:</strong> Submit your application to join the
              mentorship program.
            </li>
            <li>
              <strong>Matching:</strong> Based on your needs and goals, we match
              you with the right mentor.
            </li>
            <li>
              <strong>Mentorship Sessions:</strong> Engage in regular one-on-one
              mentorship meetings and collaborative discussions.
            </li>
            <li>
              <strong>Skill Development:</strong> Participate in workshops,
              masterclasses, and networking events to develop new skills.
            </li>
            <li>
              <strong>Ongoing Support:</strong> We continue to support you
              through every challenge, helping you stay focused and motivated.
            </li>
          </ul>
          <button className="px-6 py-2 rounded-lg font-semibold bg-emerald-800 text-white transition-colors">
            Explore Learning
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/early_adoption.jpg"
            alt="BMI Welcome"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeBMI;
