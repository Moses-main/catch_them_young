import React from "react";

const Features = () => {
  const features = [
    {
      image: "../images/access_to_resource.jpg",
      title: "NERDC-approved textbooks and workbooks..",
      description:
        "Curated textbooks and workbooks for entrepreneurship and financial literacy for ages 7–14.",
    },
    {
      image: "/images/early_adoption.jpg",
      title: "Mentorship for Every Stage",
      description:
        " Whether you're just starting out, refining your business model, or scaling your company, we have mentors with the expertise you need..",
    },
    {
      image: "/images/budgeting.jpg",
      title: "Support in Key Areas",
      description:
        " Gain insight into areas like business strategy, marketing, financial planning, leadership, product development, and more.",
    },
  ];

  return (
    <div className="py-10 bg-[#f3f4f6]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-green-800">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <div className="relative w-full h-64 sm:h-70 md:h-80 lg:h-96  overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-contain absolute inset-0  transition-opacity duration-1000 rounded-lg"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl -mt-15 font-semibold text-emerald-800 mb-2">
                {feature.title}
              </h3>
              <p className="mt-2 text-emerald-800 text-sm sm:text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
