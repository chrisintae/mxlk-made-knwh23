/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        600: "37.5rem",
      },
      maxWidth: {
        tile: "20rem",
        384: "24rem",
        600: "37.5rem",
        1728: "108rem",
        1800: "112.5rem",
      },
      maxHeight: {
        tile: "20rem",
      },
      spacing: {
        tile: "30vw",
        dtop: "36vh",
      },
      fontFamily: {
        sans: ["News Cycle", "sans-serif"],
        serif: ["Old Standard TT", "serif"],
      },
    },
  },
  plugins: [],
};
