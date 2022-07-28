/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ED5B87',
        'secondary': '#eee',
        'shade': '#e0e0e0'
      }
    },
  },
  plugins: [],
}
