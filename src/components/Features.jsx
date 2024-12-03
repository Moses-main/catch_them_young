import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      image: "https://via.placeholder.com/150",
      title: "Innovative Curriculum",
      description: "Curated content for ages 7–14.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Community Building",
      description: "Networking with peers and mentors.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Experienced Instructors",
      description: "Learn from seasoned experts.",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-2xl font-bold mb-6">Why Choose Us?</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center transform hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;

// import React from "react";
// import { FaLightbulb, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

// const Features = () => {
//   const features = [
//     {
//       icon: <FaLightbulb />,
//       title: "Innovative Curriculum",
//       description: "Curated content for ages 7–14.",
//     },
//     {
//       icon: <FaUsers />,
//       title: "Community Building",
//       description: "Networking with peers and mentors.",
//     },
//     {
//       icon: <FaChalkboardTeacher />,
//       title: "Experienced Instructors",
//       description: "Learn from seasoned experts.",
//     },
//   ];

//   return (
//     <div className="container mx-auto py-10">
//       <h2 className="text-center text-2xl font-bold mb-6">Why Choose Us?</h2>
//       <div className="flex justify-around">
//         {features.map((feature, index) => (
//           <div key={index} className="text-center max-w-sm">
//             <div className="text-4xl text-primary mb-4">{feature.icon}</div>
//             <h3 className="text-xl font-semibold">{feature.title}</h3>
//             <p className="mt-2">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Features;
