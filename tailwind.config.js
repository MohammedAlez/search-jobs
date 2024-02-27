/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'orkney': ['Orkney', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'bold': 700,
        
      }
    },
  },
  variants: {
    fontWeight: ['responsive', 'hover', 'focus', 'active'], // Include fontWeight variants
  },
  plugins: [],
}