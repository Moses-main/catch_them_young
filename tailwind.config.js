/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#28a745', // Green color theme
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Modern font
      },
    },
  },
  plugins: [],
};

