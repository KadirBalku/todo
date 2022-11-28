/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-snow": "url('/src/assets/img/background-header.jpg')",
        "header-city": "url('/src/assets/img/background-header2.jpg')",
        "header-landscape": "url('/src/assets/img/background-header3.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
