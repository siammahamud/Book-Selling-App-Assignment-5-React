/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {

    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}
}