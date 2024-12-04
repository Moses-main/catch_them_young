module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        fadeInUp: "fadeInUp 1.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        colors: {
          primary: "#28a745", // Green color theme
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"], // Modern font
        },
      },
    },
  },
  plugins: [],
};
