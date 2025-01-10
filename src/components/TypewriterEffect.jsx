import React, { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const words = [
    "Welcome to BMI Entrepreneurship Training!",
    "Empowering the Next Generation of Entrepreneurs!",
    "Join Us Today to Learn and Grow!",
    "Transform Your Ideas into Reality!",
    "Start Your Entrepreneurial Journey Today!",
    "Innovate, Lead, and Inspire the Future!",
    "Building Skills for Tomorrow's Business Leaders!",
    "Creating Opportunities for Aspiring Entrepreneurs!",
    "Turn Your Passion into Profits with Us!",
    "Unlock Your Potential and Become a Leader!",
    "Shape the Future with Entrepreneurial Spirit!",
    "Learn, Create, and Thrive in the Business World!",
    "Step into the World of Entrepreneurship with Confidence!",
    "Develop Your Skills and Build Your Future!",
    "Achieve Your Dreams with Practical Business Knowledge!",
  ];

  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      const word = words[wordIndex];

      if (isDeleting) {
        // Erase characters
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop through words
        }
      } else {
        // Type characters
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = 150; // Adjust typing speed here
    const deletingSpeed = 50; // Adjust erasing speed here

    const timer = setTimeout(
      typeEffect,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <div className="w-full h-full flex justify-center mt-4 items-center">
      <h1
        id="typewriter"
        className="font-bold text-sm sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl"
      >
        {currentWord}
      </h1>
    </div>
  );
};

export default TypewriterEffect;
