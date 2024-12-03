import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-block font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring";
  const sizeStyle = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-5 py-3",
    lg: "text-lg px-6 py-4",
  };
  const variantStyle = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-400",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300",
    outline:
      "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-400",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
