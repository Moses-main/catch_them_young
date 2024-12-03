import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary text-white shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold hover:text-primary-dark transition"
          >
            BMI-CTY
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiMenuAlt2 />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "Courses", "Mentorship", "About Us", "Contact"].map(
            (item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-lg hover:text-primary-light transition"
                >
                  {item}
                </Link>
                {/* Underline Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-16 left-0 w-full bg-primary text-white flex flex-col items-center space-y-6 py-4 transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {["Home", "Courses", "Mentorship", "About Us", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-lg hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaGraduationCap } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="bg-primary text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <FaGraduationCap className="text-2xl mr-2" />
//           <h1 className="text-lg font-bold">BMI-CTY Academy</h1>
//         </div>
//         <ul className="flex space-x-6">
//           <li>
//             <Link to="/" className="hover:text-gray-200">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/courses" className="hover:text-gray-200">
//               Courses
//             </Link>
//           </li>
//           <li>
//             <Link to="/mentorship" className="hover:text-gray-200">
//               Mentorship
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-gray-200">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-gray-200">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
