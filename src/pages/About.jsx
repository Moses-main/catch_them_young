import React from "react";
import {
  FaBusinessTime,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-emerald-700">
        Welcome to BMI-CTY Academy
      </h1>

      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          Introducing BMI-CTY Academy
        </h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaBusinessTime className="text-emerald-700 text-3xl" />
          <p className="text-lg text-center text-gray-700">
            BMI-CTY Academy provides a unique platform for children and young
            adults to gain essential entrepreneurial skills and knowledge. Our
            aim is to nurture future innovators who will become the leaders and
            business owners of tomorrow. By introducing them to entrepreneurship
            early, we help them build the mindset necessary for wealth creation,
            talent enhancement, and sustainable business development.
          </p>
        </div>
        <p className="text-lg text-center text-gray-700">
          At BMI-CTY Academy, we believe that the foundation of great
          entrepreneurs is laid through hands-on learning and exposure to
          real-world business challenges. We empower learners to turn their
          ideas into reality and monetize their talents, paving the way for them
          to become nation-builders and change-makers.
        </p>
      </section>

      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          Our Mission and Vision
        </h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaLightbulb className="text-emerald-700 text-3xl" />
          <p className="text-lg text-center text-gray-700 mb-6">
            Our mission is to foster a new generation of young entrepreneurs who
            are equipped with the right tools, mindset, and skills needed to
            succeed in the business world. Through our entrepreneurship
            training, we aim to:
          </p>
        </div>
        <ul className="text-lg text-center text-gray-700 list-disc list-inside mb-6">
          <li>
            Provide practical skills for building and managing a business.
          </li>
          <li>Enhance creativity and innovation through talent development.</li>
          <li>
            Encourage critical thinking and decision-making in business
            environments.
          </li>
          <li>
            Support learners in understanding financial management and wealth
            creation.
          </li>
        </ul>
        <p className="text-lg text-center text-gray-700">
          We envision a world where every young mind is empowered to start their
          own business, generate value, and contribute to their community's
          economic growth and prosperity.
        </p>
      </section>

      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          Why Entrepreneurship Training Matters
        </h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaHandshake className="text-emerald-700 text-3xl" />
          <p className="text-lg text-center text-gray-700 mb-6">
            In today's fast-changing world, the ability to adapt and innovate is
            crucial for survival and success. At BMI-CTY Academy, we recognize
            that entrepreneurship is not just about starting a business—it's
            about developing a mindset that embraces challenges, creative
            problem-solving, and the drive to make a difference. Our courses
            focus on:
          </p>
        </div>
        <ul className="text-lg text-center text-gray-700 list-disc list-inside mb-6">
          <li>Leadership development and team management.</li>
          <li>Effective communication and negotiation skills.</li>
          <li>Financial literacy, budgeting, and resource management.</li>
          <li>Understanding market dynamics and customer needs.</li>
        </ul>
        <p className="text-lg text-center text-gray-700">
          We believe that these skills, when acquired at an early age, help
          children and young adults become confident, resourceful, and prepared
          for the future. Whether they choose to start their own business or
          contribute to existing enterprises, the lessons they learn with us
          will serve them for a lifetime.
        </p>
      </section>

      <section className="mb-10 border-b-2 border-emerald-200 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-emerald-700">
          Take a Look at Some of Our Courses
        </h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaChartLine className="text-emerald-700 text-3xl" />
          <p className="text-lg text-center text-gray-700 mb-6">
            Our online entrepreneurship courses provide students with the skills
            they need to succeed in the modern business world. With topics
            ranging from leadership to communication, our courses are designed
            to equip learners with the core competencies of business
            development.
          </p>
        </div>
        <p className="text-lg text-center text-gray-700 mb-6">
          Courses include, but are not limited to:
        </p>
        <ul className="text-lg text-center text-gray-700 list-disc list-inside mb-6">
          <li>Introduction to Entrepreneurship</li>
          <li>Building a Business from Scratch</li>
          <li>Developing Effective Leadership Skills</li>
          <li>Financial Literacy and Wealth Creation</li>
        </ul>
        <p className="text-lg text-center text-gray-700">
          Join us in shaping the future of entrepreneurship and become part of a
          community of young entrepreneurs making a difference in their world.
        </p>
      </section>

      <section className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-4">
          Start Your Entrepreneurial Journey Today
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Ready to take the next step in your entrepreneurial journey? Subscribe
          to our newsletter for updates on new courses, resources, and events.
        </p>
        <a
          href="/subscribe"
          className="bg-emerald-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-emerald-800"
        >
          Subscribe Now
        </a>
      </section>
    </div>
  );
};

export default About;
