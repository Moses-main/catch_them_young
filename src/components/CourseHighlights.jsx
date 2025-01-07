import React from "react";
import Slider from "react-slick"; // Importing react-slick for the carousel

const courses = [
  {
    id: 1,
    title: "Entrepreneurship Basics",
    description: "Learn the fundamentals of starting a business.",
    image: "/images/web_design.jpg", // Placeholder image URL
  },
  {
    id: 2,
    title: "Critical Thinking Skills",
    description: "Develop problem-solving abilities for real-world scenarios.",
    image: "https://via.placeholder.com/600x400", // Placeholder image URL
  },
  {
    id: 3,
    title: "Innovation & Creativity",
    description: "Explore creative strategies for business success.",
    image: "https://via.placeholder.com/600x400", // Placeholder image URL
  },
];

const CourseHighlights = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rtl: true, // Right to left direction (for sliding from right to left)
  };

  return (
    <section className="relative py-16" style={{ backgroundColor: "#fdf1e1" }}>
      <div className="container mx-auto h-screen flex flex-col justify-center">
        <h2 className="text-center text-4xl font-bold mb-8 text-emerald-800 animate-fadeInUp">
          Course Highlights
        </h2>
        <Slider {...settings} className="h-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 animate-fadeIn"
            >
              <div className="w-full h-full flex items-center justify-between">
                <div className="w-1/2 p-4">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
                <div className="w-1/2 p-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CourseHighlights;
