import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email is valid
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("Something went wrong, please try again later.");
      }
    } catch (error) {
      setMessage("There was an error submitting your email.");
    }
  };

  return (
    <div className="subscribe-container bg-[#f3f4f6] p-6 rounded-md shadow-md text-center">
      <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
      <p className="mb-4">
        Subscribe to get the latest updates on our Entrepreneurship Courses and
        News.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 w-full md:w-1/2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-700 w-full md:w-auto"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
};

export default Subscribe;
