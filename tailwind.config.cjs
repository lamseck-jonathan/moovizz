/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors : {
        'theme' : '#0d1118',
      }
    },
  },
  plugins: [],
}
