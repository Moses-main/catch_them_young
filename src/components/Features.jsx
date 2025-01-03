import React from "react";

const Features = () => {
  const features = [
    {
      image: "../images/compass.jpg",
      title: "Innovative Curriculum",
      description: "Curated content for ages 7–14.",
    },
    {
      image: "../images/female_coach.jpg",
      title: "Community Building",
      description: "Networking with peers and mentors.",
    },
    {
      image: "../images/tutoring_class.jpg",
      title: "Experienced Instructors",
      description: "Learn from seasoned experts.",
    },
  ];

  return (
    <div className="py-10 bg-[#f3f4f6]">
      <div className="container  mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-6 text-green-800">
          Features
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center transform hover:scale-105 transition-transform"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-emerald-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-emerald-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
