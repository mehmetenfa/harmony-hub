/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#2C3333',
        link: '#A5C9CA',
        text: '#395B64',
        home: '#E7F6F2',
      }
    },
  },
  plugins: [],
}