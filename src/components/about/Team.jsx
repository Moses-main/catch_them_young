import React, { useState } from "react";

const TeamMember = ({ image, name, position, socialLinks }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => setShowModal(true);
  const handleMouseLeave = () => setShowModal(false);

  return (
    <div className="team-member relative w-full sm:w-1/2 md:w-1/3 lg:w-1/2 p-4">
      <div
        className="relative group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Responsive image */}
        <img
          className="w-full md:w-[400px] md:h-[300px] h-auto object-contain rounded-lg shadow-md transition-all duration-300"
          src={image}
          alt={name}
        />

        {showModal && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
            <div className="text-center text-white p-4 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-bold">{name}</h4>
              <p className="text-lg">{position}</p>
              <div className="social-links mt-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3 text-yellow-400 hover:text-yellow-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="text-center mt-2">
        <h4 className="text-lg font-semibold text-emerald-800">{name}</h4>
        <p className="text-md text-gray-700">{position}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      image:
        "https://bmifinishingschool.com/wp-content/uploads/2022/04/nnamdi.jpg",
      name: "John Doe",
      position: "CEO",
      socialLinks: [
        { icon: "👍", url: "https://twitter.com/johndoe" },
        { icon: "📸", url: "https://instagram.com/johndoe" },
      ],
    },
    {
      image:
        "https://bmifinishingschool.com/wp-content/uploads/2022/05/fff.png",
      name: "Jane Smith",
      position: "CTO",
      socialLinks: [
        { icon: "🔗", url: "https://linkedin.com/in/janesmith" },
        { icon: "🐦", url: "https://twitter.com/janesmith" },
      ],
    },
    // Add more team members as needed
  ];

  return (
    <section className="team-section p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-emerald-800 text-center mb-6">
        Our Team
      </h2>
      <div className="flex flex-wrap">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
