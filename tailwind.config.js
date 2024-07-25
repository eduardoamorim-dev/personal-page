// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "text-blue": "0 0 5px rgba(30, 64, 175, 0.8)",
      },
      colors: {
        "blue-light": "#1e40af",
      },
    },
  },
  plugins: [],
};
