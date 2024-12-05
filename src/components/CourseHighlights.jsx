import React from "react";

const courses = [
  {
    id: 1,
    title: "Entrepreneurship Basics",
    description: "Learn the fundamentals of starting a business.",
  },
  {
    id: 2,
    title: "Critical Thinking Skills",
    description: "Develop problem-solving abilities for real-world scenarios.",
  },
  {
    id: 3,
    title: "Innovation & Creativity",
    description: "Explore creative strategies for business success.",
  },
];

const CourseHighlights = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#fdf1e1" }}>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-8 text-gray-800 animate-fadeInUp">
          Course Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fadeIn"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
