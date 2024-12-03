import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const images = [
    {
      src: "https://th.bing.com/th/id/OIP.wn1C2AUUuFjf8rwpejEsmQHaEK?rs=1&pid=ImgDetMain",
      text: "Inspiring Innovation",
    },
    {
      src: "https://th.bing.com/th/id/OIP.a9CPofqj9V5xW6VvU01OdwHaE7?rs=1&pid=ImgDetMain",
      text: "Fostering Collaboration",
    },
    {
      src: "https://th.bing.com/th/id/OIP.KH4CzEasJ6f3-d5RNdZnFQHaEK?rs=1&pid=ImgDetMain",
      text: "Driving Creativity",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="bg-primary mt-20 text-white py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center relative">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 z-10 relative">
          <h1 className="text-4xl font-bold mb-4 mt-4">
            Shape the Entrepreneurs of Tomorrow
          </h1>
          <p className="text-lg mb-6">
            Empowering young minds with the skills to build their future.
          </p>
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full relative">
          <AnimatePresence>
            {images.map(
              (image, index) =>
                index === currentIndex && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 20,
                      duration: 1.5,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
                      <p className="text-xl font-bold text-white px-4">
                        {image.text}
                      </p>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <motion.div
//       className="bg-primary text-white py-20"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
//         <div className="text-center md:text-left md:w-1/2">
//           <h1 className="text-4xl font-bold mb-4 mt-4">
//             Shape the Entrepreneurs of Tomorrow
//           </h1>
//           <p className="text-lg mb-6">
//             Empowering young minds with the skills to build their future.
//           </p>
//           <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
//             Get Started
//           </button>
//         </div>
//         <motion.img
//           src="https://via.placeholder.com/400"
//           alt="Hero"
//           className="md:w-1/2 w-full rounded-lg shadow-lg"
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1.2 }}
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;
