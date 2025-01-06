import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const MissionAndVision = () => {
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showCoreValues, setShowCoreValues] = useState(false);

  const toggleMission = () => setShowMission(!showMission);
  const toggleVision = () => setShowVision(!showVision);
  const toggleCoreValues = () => setShowCoreValues(!showCoreValues);

  return (
    <section className="mission-vision flex flex-col lg:flex-row p-6 bg-white shadow-lg rounded-lg">
      <div className="content lg:w-1/2 w-full lg:pr-8 mb-4 lg:mb-0">
        <h2 className="text-3xl font-bold text-emerald-800 mb-4">
          Mission & Vision
        </h2>
        <div className="mission-section mb-4">
          <button
            onClick={toggleMission}
            className="flex items-center justify-between w-full text-lg text-yellow-400 font-semibold mb-2"
          >
            <span>Mission</span>
            <div className="flex items-center">
              <span className="mr-2">{showMission ? "Hide" : "Show"}</span>
              {showMission ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </button>
          {showMission && (
            <p className="text-lg text-gray-700">
              As a mission-driven organization, we are relentlessly pursuing our
              vision of a world where every graduate/young Nigerian can become a
              successful entrepreneur by accessing BMI's courses to unlock their
              potential, without the barriers of cost or location.
            </p>
          )}
        </div>
        <div className="vision-section mb-4">
          <button
            onClick={toggleVision}
            className="flex items-center justify-between w-full text-lg text-yellow-400 font-semibold mb-2"
          >
            <span>Vision</span>
            <div className="flex items-center">
              <span className="mr-2">{showVision ? "Hide" : "Show"}</span>
              {showVision ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </button>
          {showVision && (
            <p className="text-lg text-gray-700">
              BMI will help you become one true African business person,
              furnishing you with techniques, tools needed to build a successful
              entrepreneurial career amidst the peculiar challenges in Africa.
              We help you become a successful entrepreneur by supporting you
              with one-on-one mentorship from any of our experienced and
              successful entrepreneurs.
            </p>
          )}
        </div>
        <div className="core-values-section mb-4">
          <button
            onClick={toggleCoreValues}
            className="flex items-center justify-between w-full text-lg text-yellow-400 font-semibold mb-2"
          >
            <span>Core Values</span>
            <div className="flex items-center">
              <span className="mr-2">{showCoreValues ? "Hide" : "Show"}</span>
              {showCoreValues ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </button>
          {showCoreValues && (
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>
                Integrity: We uphold honesty and transparency in all our
                business dealings.
              </li>
              <li>
                Excellence: We are committed to delivering quality in everything
                we do.
              </li>
              <li>
                Innovation: We embrace creative thinking to overcome challenges
                and offer unique solutions.
              </li>
              <li>
                Mentorship: We believe in the power of mentorship to unlock
                entrepreneurial potential.
              </li>
              <li>
                Empowerment: We strive to empower the next generation of
                entrepreneurs to achieve greatness.
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="image lg:w-1/2 w-full mt-4 lg:mt-0">
        <img
          className="w-full h-auto rounded-lg"
          src="path-to-image.jpg"
          alt="Mission and Vision"
        />
      </div>
    </section>
  );
};

export default MissionAndVision;
