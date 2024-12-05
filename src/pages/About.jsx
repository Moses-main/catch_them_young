import React from "react";
import WhoWeAre from "../components/about/WhoWeAre";
import MissionAndVision from "../components/about/MissionAndVision";
import Team from "../components/about/Team";
import Subscribe from "../components/Subscribe";

const AboutUs = () => (
  <main className="about-us max-w-screen-xl mx-auto p-6">
    <WhoWeAre />
    <div className="my-6"></div> {/* Adds margin between sections */}
    <MissionAndVision />
    <div className="my-6"></div> {/* Adds margin between sections */}
    <Team />
    <Subscribe />
  </main>
);

export default AboutUs;
