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
    image: "/images/critical_thinking.avif", // Placeholder image URL
  },
  {
    id: 3,
    title: "Leadership and Team Building",
    description:
      "Learn how to lead teams effectively, inspire collaboration, and build a productive organizational culture..",
    image: "/images/leadership_and_team.jpg", // Placeholder image URL
  },
  {
    id: 4,
    title: "Business Model Development",
    description:
      "Understand how to create sustainable and scalable business models using proven frameworks like the Business Model Canvas.",
    image: "/images/business_model.jpg", // Placeholder image URL
  },
  {
    id: 5,
    title: "Digital Marketing and Branding",
    description:
      "Discover how to leverage digital tools and social media platforms to market your business and build a strong brand identity",
    image: "/images/digital_marketing.avif", // Placeholder image URL
  },
  {
    id: 6,
    title: "Financial Literacly & Management",
    description:
      "Master the fundamentals of financial planning, budgeting, and resource management to ensure business profitability and growth.",
    image: "/images/financial-literacy.jpg", // Placeholder image URL
  },
  {
    id: 7,
    title: "Real-Life Studies & Projects",
    description:
      "Apply your learning to real-life entrepreneurial challenges through hands-on projects and case study analyses.",
    image: "/images/freal_life_studies.jpeg", // Placeholder image URL
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
