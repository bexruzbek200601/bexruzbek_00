/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '1400': '1400px', // max-w-1400 deb ishlatish uchun
      },
    },

  },
  plugins: [],
}
