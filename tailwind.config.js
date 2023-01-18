/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-transparent': 'rgba(255, 255, 255, 0.27)',
      }
    },
  },
  plugins: [],
}