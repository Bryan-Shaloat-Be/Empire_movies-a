/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        BaskervvilleSC: ['Baskervville SC', 'serif'],
      },
    },
  },
  plugins: [],
}
