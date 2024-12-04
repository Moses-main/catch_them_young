import React from "react";

const Welcome = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://th.bing.com/th/id/OIP.a9CPofqj9V5xW6VvU01OdwHaE7?rs=1&pid=ImgDetMain"
            alt="Welcome Image"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 p-6">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Entrepreneurship Training
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Welcome To CTY
          </h3>
          <p className="text-gray-600 mb-6">
            Introducing BMI- CTY Academy: This academy provides platform for a
            child to get basic training and information on entrepreneurship to
            become a nation builder. The learning creates awareness on wealth
            creation, talent enhancement and business development. It
            contributes toward capacity development and building right mentality
            for innovations.
          </p>
          <p className="text-gray-600 mb-6">
            Young learners start early to get additional training, knowledge and
            attributes needed to bring out their best abilities in the context
            of starting up a new business and monetizing their talents.
          </p>
          <p className="text-gray-600 mb-6 font-semibold">
            Catch Them Young Entrepreneurship Training
          </p>
          <button
            className="px-6 py-2 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: "#23A455", color: "#fff" }}
          >
            Explore Learning
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
