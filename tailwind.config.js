/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
primary: '#6A80B9',
        'primary-dark': '#69aaa8',
        'dark-bg': '#0c0c0c',
        'text-light': '#f1f1f1',
        background: '#f8f9fa',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      // tailwind.config.js

     animation: {
            'spin-slow': 'spin 8s linear infinite',

        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
