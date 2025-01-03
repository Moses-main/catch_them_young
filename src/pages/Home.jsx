import React from "react";
// import Hero from "../components/Hero";
import Features from "../components/Features";
import MillionaireCohort from "../components/MillionaireCohort";
import CourseHighlights from "../components/CourseHighlights";
import WhyChooseUs from "../components/WhyChooseUs";
import Welcome from "../components/Welcome";
import WelcomeBMI from "../components/WelcomeBMI";
import Subscribe from "../components/Subscribe";
const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <MissionSection /> */}
      <Welcome />
      <WhyChooseUs />
      <WelcomeBMI />
      <Features />
      {/* <MillionaireCohort /> */}
      <CourseHighlights />
      {/* <CommunityEngagement /> */}
      {/* <Certificates /> */}
      <Subscribe />
    </div>
  );
};

export default Home;
