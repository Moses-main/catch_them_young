import { motion } from "framer-motion";

const MillionaireCohort = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-green-600 text-center text-white">
      <h2 className="text-4xl font-bold mb-10">Millionaire Cohort Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-green-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 className="text-2xl font-semibold mb-2">Challenge and Win</h3>
          <p className="text-white mb-4">
            Engage in exciting challenges and earn rewards while developing your
            skills.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-green-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 className="text-2xl font-semibold mb-2">Rich Interaction</h3>
          <p className="text-white mb-4">
            Connect and interact with fellow young entrepreneurs to learn and
            grow together.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-green-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 className="text-2xl font-semibold mb-2">Critical Thinking</h3>
          <p className="text-white mb-4">
            Enhance your critical thinking abilities through real-world problems
            and activities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MillionaireCohort;
