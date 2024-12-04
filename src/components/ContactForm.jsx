import React from "react";

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
