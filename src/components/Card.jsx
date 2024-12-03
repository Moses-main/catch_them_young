import React from "react";

const Card = ({ image, title, description, footer, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {footer && <div className="mt-2">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
