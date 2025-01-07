import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";
import logo from "../assets/bmi_logo1.png";
import colorLogo from "../assets/bmi_logo.png";

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
      className={`fixed top-0 left-0 w-full z-50 pb-200 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-gradient-to-r from-emerald-800 to-yellow-600 text-white shadow-lg font-bold"
          : "bg-white-800 text-emerald-800 font-bold"
      }`}
      style={{ "--navbar-height": "64px" }}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-2xl font-bold hover:text-emerald-200 transition"
          >
            <img
              src={isScrolled ? logo : colorLogo}
              alt="CTY Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>
          <div
            className={`flex flex-col ${
              isScrolled ? "text-white" : "text-emerald-800"
            } transition-colors`}
          >
            <span className="text-xl font-bold uppercase">BMI</span>
            <span className="text-sm font-bold uppercase">
              FINISHING SCHOOL
            </span>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-2xl focus:outline-none border border-4 border-solid border-white rounded-lg p-3"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiMenuAlt2 />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "Mentorship", "About", "Contact"].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-lg hover:text-yellow-800 transition hover:border-b-4 hover:border-emerald-800 duration-300"
              >
                {item}
              </Link>
              {/* Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-20 left-0 w-full bg-[#f3f4f6] text-black flex flex-col items-center justify-center space-y-6 py-4 transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {["Home", "Mentorship", "About", "Contact"].map((item, index) => (
            <li key={index} className="w-full text-center">
              <Link
                to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-lg hover:text-emerald-800 transition block py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
              {index < 3 && (
                <div className="border-b border-gray-300 w-full"></div>
              )}
              {/* Add border for all except last item */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
