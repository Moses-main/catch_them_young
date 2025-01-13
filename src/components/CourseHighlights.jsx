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
    image: "/images/real_life_studies.jpeg", // Placeholder image URL
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
    <section
      className="relative py-4 md:py-16"
      style={{ backgroundColor: "#fdf1e1" }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-center text-lg md:text-4xl font-bold mb-4 text-emerald-800 animate-fadeInUp">
          Course Highlights
        </h2>

        {/* Carousel/Slider */}
        <Slider {...settings} className="w-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col items-center justify-center w-full"
            >
              {/* Image Section */}
              <div className="w-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="md:w-full w-[95%] mx-auto h-[300px] md:h-[650px] object-cover rounded-md"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-full px-6 py-4 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-800 mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CourseHighlights;
