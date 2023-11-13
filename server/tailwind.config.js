/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/main/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

