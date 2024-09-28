/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p: "#16DB65",
        s: "#058C42",
        t: "#04471C",
        q: "#0D2818",
        b: "#020202",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
