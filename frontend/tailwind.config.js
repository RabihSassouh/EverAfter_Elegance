/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BF7A0F", // Add primary color
        secondary: "#996A0C",
      },
      backgroundColor: {
        primary: "#BF7A0F", // Define a bg-primary utility class
        secondary: "#996A0C",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add Roboto font
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
