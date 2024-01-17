/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FF6969',
        'secondary' : '#720455',
        'main':'#3C0753',
        'light':"#FFB000",
        'high' : '#FF6000'
      }
    },
  },
  plugins: [],
}

