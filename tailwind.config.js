/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "720px",
        lg: "1100px",
      },
      fontFamily: {
        h: ["Prompt", "sans-serif"],
        b: ["Montserrat", "sans-serif"],
      },
      colors: {
        P: "#364861",
        A1: "#E35336",
        A2: "#636B2F",
      },
      borderRadius: {
        card: "8px",
        btn: "4px",
      },
      maxWidth: {
        max: "1440px",
      },
    },
  },
  plugins: [],
};
