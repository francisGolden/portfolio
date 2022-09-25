/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "historja": "url('img/historjascreen.png')",
        "waldo": "url('img/waldoscreen.png')",
        "mario": "url('img/marioscreen.png')",
        "trafalgar": "url('img/trafalgar.jpg')"
        
      }
    },
  },
  plugins: [],
}
