/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode: 'class',

  theme: {
    extend: {
      spacing: {
        app_sidebar_w: "300px",
        app_header_h: "64px",
      },
      colors:{
        black: "#19181F",
        dark_Blue:"#003049",
        light_blue:"@669bbc",
        light_red:"#c1121f",
        dark_red:"#780000",
        dark_green:"#0A1210"


      }
    },
  },
  plugins: [],
}
