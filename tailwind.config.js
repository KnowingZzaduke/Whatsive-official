// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "whatsive-color": "#2bb741",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(328px, 1fr))"
      },
      backgroundColor: {
        'triangule': 'linear-gradient(to top left, #000000, #f0f0f0)',
      },
      boxShadow: {
        'triangule': '-10px 0 20px #0000001a',
      },
      zIndex: {
        '-1': '-1',
      },
      clipPath: {
        'triangule': 'polygon(100% 0, 100% 100%, 0 100%, 50% 50%)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
