import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-lg mb-10">
        Have questions or want to learn more about our programs? Get in touch
        with us!
      </p>
      <form className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Subject"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
