// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "text-blue": "0 0 5px rgba(30, 64, 175, 0.8)",
        "border-purple": "0 0 0 1px rgba(77, 77, 192, 0.8)",
      },
      colors: {
        "blue-light": "#1e40af",
        customGray: "#1E1E1E",
        hoverGray: "#444444",
      },
    },
  },
  plugins: [],
};
