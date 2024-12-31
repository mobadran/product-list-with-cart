/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        red: '#c73a0f',
        green: '#1ea475',
        rose: {
          50: '#fcf9f7',
          100: '#f4edeb',
          300: '#c9aea6',
          400: '#ad8985',
          500: '#87635a',
          900: '#260f08',
        }
      }
    },
  },
  plugins: [],
}

