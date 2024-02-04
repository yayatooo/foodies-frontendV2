/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        primary: "#E6C744",
        secondary: "#e3a702",
        "gray-prm": "#C2C8DA",
      },
      colors: {
        primary: "#E6C744",
      },
      backgroundImage: {
        "bg-hero": "url('/background-hero.jpg')",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
