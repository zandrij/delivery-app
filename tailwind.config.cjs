/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#444'
      }
    },
  },
  plugins: [],
}


const konstaConfig = require('konsta/config');

// wrap your config with konstaConfig
module.exports = konstaConfig({
 
});