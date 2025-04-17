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
        black: "#19181F"
      }
    },
  },
  plugins: [],
}
