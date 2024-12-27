/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008080'
      },
      fontFamily: {
        customFont: ['Roboto Condensed', 'sans-serif']
      },
      height: {
        sectionHeight: '40rem'
      }
    },
  },
  plugins: [],
}