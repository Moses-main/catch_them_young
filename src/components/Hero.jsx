import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="bg-primary text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Shape the Entrepreneurs of Tomorrow
          </h1>
          <p className="text-lg mb-6">
            Empowering young minds with the skills to build their future.
          </p>
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>
        <motion.img
          src="https://via.placeholder.com/400"
          alt="Hero"
          className="md:w-1/2 w-full rounded-lg shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </motion.div>
  );
};

export default Hero;
