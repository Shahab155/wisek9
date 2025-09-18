/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#EF4444',
        secondary: '#000000',
      },
      fontWeight:{
        primary: '700',
        secondary: '600',

      },
    },
  },
  plugins: [],
}
