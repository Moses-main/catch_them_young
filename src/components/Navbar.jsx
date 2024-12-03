import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";
import logo from "../assets/cty.png";

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
          ? "bg-emerald-800 text-white shadow-lg"
          : "bg-primary text-white"
      }`}
      style={{ "--navbar-height": "64px" }}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        <div>
          <Link
            to="/"
            className="text-2xl font-bold hover:text-emerald-200 transition"
          >
            <img
              src={logo}
              alt="CTY Logo"
              className="w-20 h-20 object-contain"
            />
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
          {["Home", "Courses", "Mentorship", "About", "Contact"].map(
            (item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-lg hover:text-emerald-200 transition"
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
          className={`fixed top-16 left-0 w-full bg-green-500 text-white flex flex-col items-center space-y-6 py-4 transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {["Home", "Courses", "Mentorship", "About Us", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-lg hover:text-emerald-200 transition"
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
