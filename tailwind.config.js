const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "src/**/*.{js,jsx}",
    "components/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'custom-inset': 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
      },
    },

  },
  plugins: [require("tailwindcss-animate")],
}


// Add this to your Tailwind CSS configuration
// In tailwind.config.js add:
// theme: {
//   extend: {
//     keyframes: {
//       'slide-in': {
//         '0%': { transform: 'translateX(100%)', opacity: '0' },
//         '100%': { transform: 'translateX(0)', opacity: '1' },
//       }
//     },
//     animation: {
//       'slide-in': 'slide-in 0.3s ease-out',
//     },
//   },
// },