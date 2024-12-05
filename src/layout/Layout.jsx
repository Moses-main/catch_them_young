import React from "react";
import Navbar from "../components/Navbar"; // Import your navigation bar component
import Footer from "../components/Footer"; // Import your footer component (if needed)

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Navigation bar at the top */}
      <main className="mt-16 md:mt-25">{children}</main> {/* Adjust margin */}
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default Layout;
