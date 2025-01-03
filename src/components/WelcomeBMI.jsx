import React from "react";

const WelcomeBMI = () => {
  return (
    <section className="py-16 bg-[#fdf1e1]">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 p-6">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Entrepreneurship Training
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Welcome To BMI
          </h3>
          <p className="text-gray-600 mb-6">
            We are delighted to welcome you to BMI Portal. The world is
            constantly changing and evolving as technology advances. We have to
            accept these changes and position to harness all the wonderful
            benefits. From changing perspectives on history and studies of
            people to the world of computer science, there’s more to know yet.
            We are leveraging these technological advancements to train
            potential entrepreneurs.
          </p>
          <p className="text-gray-600 mb-6">
            At BMI, we deliberately hatch your pondered ideas
          </p>
          <button
            className="px-6 py-2 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: "#23A455", color: "#fff" }}
          >
            Explore Learning
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="../images/coach.jpg"
            alt="BMI Welcome"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeBMI;
