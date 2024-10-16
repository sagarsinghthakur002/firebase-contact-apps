/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        yellow: "#FFEAAE",
        dark: "#FCCA3F",
        orange: "#FF820C",
      },
    },
  },
  plugins: [],
}
