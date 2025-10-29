const { Bitcoin } = require('lucide-react');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bitcount: ['"Bitcount Grid Single"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        BBH: ['"BBH Sans Hegarty"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
