import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import BookSearchAnimation from "../assets/404-book-search.json"; // Place animation JSON file in your assets folder.

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="w-72 h-72">
        <Lottie animationData={BookSearchAnimation} loop={true} />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mt-6">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        The page you’re looking for doesn’t exist. It seems you're lost in the
        library!
      </p>
      <Link
        to="/"
        className="mt-4 bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:bg-primary-dark"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
