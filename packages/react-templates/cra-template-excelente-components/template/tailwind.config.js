/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@excelente/button/dist/index.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [require('daisyui')],
  }