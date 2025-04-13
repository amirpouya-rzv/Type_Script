/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing :{
        app_sidebar_w: "300px",
        app_header_h: "64px",
      }
    },
  },
  plugins: [],
}