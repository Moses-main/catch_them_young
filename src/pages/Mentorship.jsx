import React from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaHandsHelping,
  FaRocket,
} from "react-icons/fa";
import Lottie from "lottie-react";
import mentorshipAnimation from "../animations/mentorship.json"; // Replace with the path to your Lottie animation
import howItWorksAnimation from "../animations/how-it-works.json"; // Replace with the path
import benefitsAnimation from "../animations/benefits.json"; // Replace with the path
import getStartedAnimation from "../animations/get-started.json"; // Replace with the path

const Mentorship = () => {
  return (
    <div className="container mx-auto py-12 px-6 bg-[#f9f5f0]">
      {" "}
      {/* Carton color background */}
      <h1 className="text-4xl font-extrabold text-center mb-8 text-emerald-700">
        Welcome to BMI-CTY Mentorship Program
      </h1>
      {/* Introduction Section */}
      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg bg-white">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          Introduction to Our Mentorship Program
        </h2>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 mb-6">
          <Lottie
            animationData={mentorshipAnimation}
            className="w-48 md:w-64"
          />
          <div className="space-y-4">
            <p className="text-lg text-center md:text-left text-gray-700">
              At BMI-CTY Academy, we believe that mentorship is a key ingredient
              for entrepreneurial success. Our mentorship program connects young
              aspiring entrepreneurs with experienced mentors who provide
              guidance, support, and expertise to help them navigate their
              entrepreneurial journey.
            </p>
            <img
              src="https://th.bing.com/th/id/OIP.YZ4bK1NTuFFm86SJxp1F_AHaEM?rs=1&pid=ImgDetMain" // Replace with your image URL
              alt="Introduction to Mentorship"
              className="rounded-lg w-full md:w-96"
            />
          </div>
        </div>
      </section>
      {/* How the Program Works Section */}
      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg bg-white">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          How the Program Works
        </h2>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 mb-6">
          <Lottie
            animationData={howItWorksAnimation}
            className="w-48 md:w-64"
          />
          <div className="space-y-4">
            <p className="text-lg text-center md:text-left text-gray-700">
              Our mentorship program is designed to cater to the needs of young
              entrepreneurs at various stages of their journey. From
              conceptualizing ideas to scaling businesses, we provide a tailored
              experience that fits the unique challenges of each mentee.
            </p>
            <ul className="text-lg text-gray-700 list-disc list-inside">
              <li>
                1-on-1 mentorship sessions with experienced business leaders.
              </li>
              <li>
                Goal setting and strategic planning for business development.
              </li>
              <li>
                Continuous feedback and progress tracking to ensure success.
              </li>
              <li>
                Access to a network of entrepreneurs and business professionals.
              </li>
            </ul>
            <img
              src="https://th.bing.com/th/id/R.18329cafdd67590cfed07a697b84a7a5?rik=9GJa9f3T2v%2bFQA&pid=ImgRaw&r=0" // Replace with your image URL
              alt="How it works"
              className="rounded-lg w-full md:w-96"
            />
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg bg-white">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          Benefits of Being a Mentee
        </h2>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 mb-6">
          <Lottie animationData={benefitsAnimation} className="w-48 md:w-64" />
          <div className="space-y-4">
            <p className="text-lg text-center md:text-left text-gray-700">
              As a mentee in the BMI-CTY Mentorship Program, you gain access to
              invaluable resources and insights that will set you on the path to
              success. Our mentors are dedicated to your growth and offer
              personalized guidance tailored to your specific needs and goals.
            </p>
            <img
              src="https://th.bing.com/th/id/R.07b0ff5cf20b0cf0d78fcf4075e8e4e4?rik=F4v8b9hroL0bUQ&pid=ImgRaw&r=0" // Replace with your image URL
              alt="Benefits"
              className="rounded-lg w-full md:w-96"
            />
          </div>
        </div>
      </section>
      {/* How to Get Started Section */}
      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg bg-white">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          How to Get Started
        </h2>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 mb-6">
          <Lottie
            animationData={getStartedAnimation}
            className="w-48 md:w-64"
          />
          <div className="space-y-4">
            <p className="text-lg text-center md:text-left text-gray-700">
              Ready to take your entrepreneurial skills to the next level?
              Follow these easy steps to get started:
            </p>
            <ol className="text-lg text-gray-700 list-decimal list-inside">
              <li>
                Sign up for the BMI-CTY Mentorship Program on our website.
              </li>
              <li>
                Complete the mentee application form to tell us about your
                goals.
              </li>
              <li>Match with a mentor based on your interests and goals.</li>
              <li>
                Schedule your first mentorship session and begin your journey.
              </li>
            </ol>
            <img
              src="https://th.bing.com/th/id/OIP.Ux2diSwnsXzScXxu83YzwwHaD4?rs=1&pid=ImgDetMain" // Replace with your image URL
              alt="Get Started"
              className="rounded-lg w-full md:w-96"
            />
          </div>
        </div>
      </section>
      {/* Call-to-Action Section */}
      <section className="text-center mb-10 bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-4">
          Start Your Mentorship Journey Now
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Don’t miss the opportunity to work with the best in the business.
          Subscribe to our mentorship program and start receiving personalized
          support to help you achieve your entrepreneurial dreams.
        </p>
        <a
          href="/mentorship-signup"
          className="bg-emerald-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-emerald-800"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default Mentorship;
