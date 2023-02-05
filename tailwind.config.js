/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ["Inter", ...defaultTheme.fontFamily.sans],
        "TitleFont" : ["Unbounded", ...defaultTheme.fontFamily.sans]
      },
    },
    colors: {
      transparent: 'transparent',
      'black': '#333333',
      'white': '#ffffff',
      'grey': '#F2F2F2',
      'orange': '#E07A5F',
      'blue': '#3D405B'
    },
  },
  plugins: [require('tailwind-scrollbar')],
}