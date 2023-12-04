/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-glass': '#0B0B0EE5',
        'primary': '#5965D2',
      },
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}