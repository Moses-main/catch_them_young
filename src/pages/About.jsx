import React from "react";
import WhoWeAre from "../components/about/WhoWeAre";
import MissionAndVision from "../components/about/MissionAndVision";
import Team from "../components/about/Team";
import Subscribe from "../components/Subscribe";
// import Map from "../components/Map";

const AboutUs = () => (
  <main className="about-us  md:mt-60 mx-auto p-6 flex flex-col gap-12">
    <WhoWeAre />
    <MissionAndVision />
    <Team />
    <Subscribe />
    {/* <Map /> */}
  </main>
);

export default AboutUs;
