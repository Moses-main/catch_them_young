import { FaRocket, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-green-600 mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <FaRocket className="text-4xl text-green-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Early Development</h3>
          <p className="text-gray-700 mb-4">
            Start building the foundation for success from a young age.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
            Learn More
          </button>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <FaChalkboardTeacher className="text-4xl text-green-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Holistic Learning</h3>
          <p className="text-gray-700 mb-4">
            Our programs cover various aspects of entrepreneurship, including
            idea generation and business planning.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
            Learn More
          </button>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <FaUsers className="text-4xl text-green-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">
            Experienced Instructors
          </h3>
          <p className="text-gray-700 mb-4">
            Benefit from guidance provided by seasoned entrepreneurs and
            educators.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
