import { FaRocket, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="py-20 text-center"
      style={{ backgroundColor: "#fffaf3" }}
    >
      <h2 className="text-4xl font-bold mb-10" style={{ color: "#23A455" }}>
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          style={{ backgroundColor: "#dff5e5" }}
        >
          <FaRocket className="text-4xl mb-4" style={{ color: "#23A455" }} />
          <h3 className="text-2xl font-semibold mb-2">Early Development</h3>
          <p className="text-gray-700 mb-4">
            Start building the foundation for success from a young age.
          </p>
          <button
            className="px-6 py-2 rounded-lg transition duration-300"
            style={{
              backgroundColor: "#23A455",
              color: "#fff",
            }}
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          style={{ backgroundColor: "#dff5e5" }}
        >
          <FaChalkboardTeacher
            className="text-4xl mb-4"
            style={{ color: "#23A455" }}
          />
          <h3 className="text-2xl font-semibold mb-2">Holistic Learning</h3>
          <p className="text-gray-700 mb-4">
            Our programs cover various aspects of entrepreneurship, including
            idea generation and business planning.
          </p>
          <button
            className="px-6 py-2 rounded-lg transition duration-300"
            style={{
              backgroundColor: "#23A455",
              color: "#fff",
            }}
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          style={{ backgroundColor: "#dff5e5" }}
        >
          <FaUsers className="text-4xl mb-4" style={{ color: "#23A455" }} />
          <h3 className="text-2xl font-semibold mb-2">
            Experienced Instructors
          </h3>
          <p className="text-gray-700 mb-4">
            Benefit from guidance provided by seasoned entrepreneurs and
            educators.
          </p>
          <button
            className="px-6 py-2 rounded-lg transition duration-300"
            style={{
              backgroundColor: "#23A455",
              color: "#fff",
            }}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
