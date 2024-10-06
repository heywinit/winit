/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p: "#eb5e28",
        t: "#fffce8",
        b: "#3e363f",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
