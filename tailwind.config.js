/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },

  },
  plugins: [require('tailwind-scrollbar-hide'),
    require("tailwindcss-animate"),
    
  ],
}

