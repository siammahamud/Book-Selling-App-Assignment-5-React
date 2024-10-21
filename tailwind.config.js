/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blowup: {
          '0%': { transform: 'translateY(10rem)' },
          '25%': { transform: 'translateY(7.5rem)' },
          '50%': { transform: 'translateY(5rem)' },
          '75%': { transform: 'translateY(2.5rem)' },
          '100%': { transform: 'translateY(0rem)' },
        },
      },
      animation: {
        'pop-up': ' blowup 3s linear infinite',
      },

    },
  },
  plugins: [],
}