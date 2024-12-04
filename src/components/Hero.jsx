// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Hero = () => {
//   const images = [
//     {
//       src: "https://th.bing.com/th/id/OIP.wn1C2AUUuFjf8rwpejEsmQHaEK?rs=1&pid=ImgDetMain",
//       text: "Inspiring Innovation",
//     },
//     {
//       src: "https://th.bing.com/th/id/OIP.a9CPofqj9V5xW6VvU01OdwHaE7?rs=1&pid=ImgDetMain",
//       text: "Fostering Collaboration",
//     },
//     {
//       src: "https://th.bing.com/th/id/OIP.KH4CzEasJ6f3-d5RNdZnFQHaEK?rs=1&pid=ImgDetMain",
//       text: "Driving Creativity",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <motion.div
//       className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white"
//       style={{ backgroundColor: "#fffaf3", color: "#23A455" }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center relative">
//         {/* Text Section */}
//         <div className="text-center md:text-left md:w-1/2 z-10 relative">
//           <h1 className="text-4xl font-bold mb-4 mt-4">
//             Shape the Entrepreneurs of Tomorrow
//           </h1>
//           <p className="text-lg mb-6">
//             Empowering young minds with the skills to build their future.
//           </p>
//           <button
//             className="px-6 py-2 rounded-lg font-semibold transition-colors"
//             style={{ backgroundColor: "#23A455", color: "#fff" }}
//           >
//             Get Started
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="md:w-1/2 w-full relative">
//           <AnimatePresence>
//             {images.map(
//               (image, index) =>
//                 index === currentIndex && (
//                   <motion.div
//                     key={index}
//                     className="absolute inset-0 flex items-center justify-center"
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 50,
//                       damping: 20,
//                       duration: 1.5,
//                     }}
//                   >
//                     <img
//                       src={image.src}
//                       alt={`Slide ${index + 1}`}
//                       className="rounded-lg shadow-lg object-cover w-full h-auto"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
//                       <p className="text-xl font-bold text-white px-4">
//                         {image.text}
//                       </p>
//                     </div>
//                   </motion.div>
//                 )
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;
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
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white"
      style={{ backgroundColor: "#fffaf3", color: "#23A455" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 relative">
        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2 z-10 relative px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4 mt-4">
            Shape the Entrepreneurs of Tomorrow
          </h1>
          <p className="text-lg mb-6">
            Empowering young minds with the skills to build their future.
          </p>
          <button
            className="px-6 py-2 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: "#23A455", color: "#fff" }}
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          <AnimatePresence>
            {images.map(
              (image, index) =>
                index === currentIndex && (
                  <motion.div
                    key={index}
                    className="relative w-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
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
                      className="rounded-lg shadow-lg object-cover w-full"
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
