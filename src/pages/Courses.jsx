import { motion } from "framer-motion";

const CourseCard = ({ image, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
        Enroll Now
      </button>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-green-600 mb-10">
        Course Catalog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <CourseCard
          image="course-image1.jpg"
          title="Entrepreneurship Basics"
          description="Learn the basics of starting and running a business."
        />
        <CourseCard
          image="course-image2.jpg"
          title="Marketing Strategies"
          description="Master the art of marketing and brand building."
        />
        <CourseCard
          image="course-image3.jpg"
          title="Leadership Development"
          description="Develop strong leadership skills to guide teams."
        />
      </div>
    </section>
  );
};

export default Courses;
