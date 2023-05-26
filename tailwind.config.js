/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      height: {
        110: "450px",
        105: "410px",
        120: "550px",
      },
      width: {
        140: "650px",
        "45/100": "45%",
        "4/10": "40%",
      },
      colors: {
        btnColor: "#F0BD6A",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
