/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(0, 8, 22)",
        "secondary": "rgb(98, 156, 255)",
        "tertiary": "rgb(0, 21, 58)",
        "accent": "rgb(253, 152, 0)"
      },
      boxShadow: {
        card: "0px 0px 134px -23px rgba(98,156,255,0.19)"
      }
    },
  },
  plugins: [],
}