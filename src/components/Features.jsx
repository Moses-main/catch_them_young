import React from "react";

const Features = () => {
  const features = [
    {
      image:
        "https://th.bing.com/th/id/OIP.XCooVZVEoUwApFjoogxQxwHaEK?w=331&h=186&c=7&r=0&o=5&pid=1.7",
      title: "Innovative Curriculum",
      description: "Curated content for ages 7–14.",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.l594hDMbzkuuT9RYTRTX0AHaD4?w=290&h=180&c=7&r=0&o=5&pid=1.7",
      title: "Community Building",
      description: "Networking with peers and mentors.",
    },
    {
      image:
        "https://th.bing.com/th/id/R.3bcf0c699175a5196a99053a8c19cc15?rik=tcmiN5l44xlCvA&pid=ImgRaw&r=0&sres=1&sresct=1",
      title: "Experienced Instructors",
      description: "Learn from seasoned experts.",
    },
  ];

  return (
    <div className="py-10 bg-[#f3f4f6]">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-6 text-green-800">
          Features
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center transform hover:scale-105 transition-transform"
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
