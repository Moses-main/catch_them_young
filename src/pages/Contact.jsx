import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6 lg:px-8">
      {/* Page Title */}
      <h1 className="md:text-3xl  text-emerald-800 font-bold text-center mb-6 mt-6 text-md">
        Contact Us
      </h1>
      <p className="text-center md:text-lg font-bold mb-10 text-sm text-gray-700">
        Have questions or want to learn more about our programs? Reach out to
        us, and we'll be happy to assist!
      </p>

      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 lg:items-stretch">
        {/* Left Column: Contact Information */}
        <div className="lg:w-1/2 flex-grow">
          <div className="h-full bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center">
            <h2 className="md:text-2xl text-md text-emerald-800 font-semibold text-center sm:text-3xl">
              Our Contact Information
            </h2>
            <p className="text-center text-sm  text-gray-700 md:text-lg mt-4">
              You can also reach us directly using the details below:
            </p>
            <ul className="space-y-2 text-left ml-6 text-gray-700  text-sm md:text-md sm:text-lg mt-4">
              <li>
                <strong>Phone:</strong> (+234) 915 438 2636.
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:hello@bmifinishingschool.com"
                  className="text-emerald-800 hover:underline"
                >
                  hello@bmifinishingschool.com
                </a>
              </li>
              <li>
                <strong>Address:</strong> 123 Business Matters Street, Lagos,
                Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Column: Contact Form */}
        <div className="lg:w-1/2 flex-grow">
          <form className="h-full bg-white shadow-lg rounded-lg p-6 space-y-4 flex flex-col justify-between">
            <h2 className="md:text-2xl text-md text-emerald-800 font-semibold text-center mb-4 sm:text-3xl">
              Send Us a Message
            </h2>
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-sm sm:text-base text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm sm:text-base"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-sm sm:text-base text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm sm:text-base"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block font-semibold text-sm sm:text-base text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm sm:text-base"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-semibold text-sm sm:text-base text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm sm:text-base"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="w-full bg-emerald-800 text-white py-2 rounded-lg font-semibold border border-emerald-800 hover:bg-emerald-900 sm:text-lg">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="mt-8 lg:mt-12 bg-white shadow-lg rounded-lg p-6 lg:p-8 lg:w-full">
        <h2 className="md:text-2xl text-md text-emerald-800 font-semibold  text-center mb-4 sm:text-3xl">
          Visit Us
        </h2>
        <p className="text-center md:text-lg font-bold text-sm text-gray-700 mb-6">
          Find us at our location in Lagos, Nigeria.
        </p>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          {/* Placeholder for Map Embed */}
          <p className="text-gray-600">Map embed coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
