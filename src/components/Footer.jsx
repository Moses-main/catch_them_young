import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/bmi_logo1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src={logo}
            alt="bmi logo"
            className="w-20 h-20 object-contain rounded-full p-1"
          />

          <h3 className="text-lg font-bold mb-2">BMI-CTY Academy</h3>
          <p>
            Empowering the next generation of entrepreneurs through innovative
            education and mentorship programs.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            {/* <li>
              <a href="/courses" className="hover:underline">
                Courses
              </a>
            </li> */}
            <li>
              <a href="/mentorship" className="hover:underline">
                Mentorship
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>© 2024 BMI-CTY Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
