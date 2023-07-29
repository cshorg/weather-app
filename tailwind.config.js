/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#100E1D",
      secondary: "#1E213A",
      purple: "#585676",
      grey: "#6E707A",
      yellow: "#FFEC65",
      blue: "#3C47E9",
      white: "#ffffff",
      offWhite: "#A09FB1",
      contentWhite: "#E7E7EB"
    },
    fontFamily: {
      display: ["Raleway", "Roboto", "sans-serif"]
    }
  },
  plugins: []
}
