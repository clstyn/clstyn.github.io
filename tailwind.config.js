/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#B8C3C2',
        'blue': '#B7D0D2',
        'cream': '#F7F5F4',
        'choco': '#DDCFCD',
        'darkchoco': '#D1BFBD',
        'dark1': '#080A0B'
      },
      fontFamily: {
        'body': ['Montserrat', 'sans-serif'],
        'heading': 'Adamina'
      },
      screens: {
        'phone': '375px'
      }
    },
  },
  plugins: [],
}
