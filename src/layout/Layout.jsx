import React from "react";
import Navbar from "../components/Navbar"; // Import your navigation bar component
import Footer from "../components/Footer"; // Import your footer component (if needed)

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Navigation bar at the top */}
      <main className="pt-16 md:pt-20">{children}</main>{" "}
      {/* Content of the page */}
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default Layout;
