import React from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaHandsHelping,
  FaRocket,
} from "react-icons/fa";

const Mentorship = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-emerald-700">
        Welcome to BMI-CTY Mentorship Program
      </h1>

      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          Introduction to Our Mentorship Program
        </h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaChalkboardTeacher className="text-emerald-700 text-3xl" />
          <p className="text-lg text-center text-gray-700">
            At BMI-CTY Academy, we believe that mentorship is a key ingredient
            for entrepreneurial success. Our mentorship program connects young
            aspiring entrepreneurs with experienced mentors who provide
            guidance, support, and expertise to help them navigate their
            entrepreneurial journey. Whether you're just starting out or looking
            to scale your business, our mentors are here to empower you with the
            knowledge and insights you need to succeed.
          </p>
        </div>
      </section>

      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          How the Program Works
        </h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaUsers className="text-emerald-700 text-3xl" />
          <p className="text-lg text-center text-gray-700 mb-6">
            Our mentorship program is designed to cater to the needs of young
            entrepreneurs at various stages of their journey. From
            conceptualizing ideas to scaling businesses, we provide a tailored
            experience that fits the unique challenges of each mentee.
          </p>
        </div>
        <ul className="text-lg text-center text-gray-700 list-disc list-inside mb-6">
          <li>1-on-1 mentorship sessions with experienced business leaders.</li>
          <li>Goal setting and strategic planning for business development.</li>
          <li>Continuous feedback and progress tracking to ensure success.</li>
          <li>
            Access to a network of entrepreneurs and business professionals.
          </li>
        </ul>
        <p className="text-lg text-center text-gray-700">
          Whether you need advice on business models, marketing strategies, or
          navigating funding opportunities, our mentors will be there to support
          you every step of the way.
        </p>
      </section>

      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          Benefits of Being a Mentee
        </h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaHandsHelping className="text-emerald-700 text-3xl" />
          <p className="text-lg text-center text-gray-700 mb-6">
            As a mentee in the BMI-CTY Mentorship Program, you gain access to
            invaluable resources and insights that will set you on the path to
            success. Our mentors are dedicated to your growth and offer
            personalized guidance tailored to your specific needs and goals.
          </p>
        </div>
        <ul className="text-lg text-center text-gray-700 list-disc list-inside mb-6">
          <li>Learn from seasoned entrepreneurs and business leaders.</li>
          <li>Gain insights into industry trends and best practices.</li>
          <li>
            Receive actionable advice for overcoming common entrepreneurial
            challenges.
          </li>
          <li>
            Expand your professional network and connect with like-minded
            individuals.
          </li>
        </ul>
        <p className="text-lg text-center text-gray-700">
          With this guidance, you’ll be able to fast-track your entrepreneurial
          journey and avoid common pitfalls that many startups face.
        </p>
      </section>

      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          How to Get Started
        </h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaRocket className="text-emerald-700 text-3xl" />
          <p className="text-lg text-center text-gray-700 mb-6">
            Ready to take your entrepreneurial skills to the next level? Getting
            started with our mentorship program is simple. Follow these easy
            steps:
          </p>
        </div>
        <ol className="text-lg text-center text-gray-700 list-decimal list-inside mb-6">
          <li>Sign up for the BMI-CTY Mentorship Program on our website.</li>
          <li>
            Complete the mentee application form to tell us about your
            entrepreneurial goals.
          </li>
          <li>
            Match with a mentor based on your interests, needs, and goals.
          </li>
          <li>
            Schedule your first mentorship session and begin your journey toward
            success.
          </li>
        </ol>
        <p className="text-lg text-center text-gray-700">
          It's that simple! Join our program today and start benefiting from the
          wisdom and experience of our seasoned mentors.
        </p>
      </section>

      <section className="text-center mb-10">
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
