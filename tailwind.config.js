/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      dark: {

        "secondary": "#F2511B",
        "primary": "#d63500",

        "base-300":"#f4f3e7",

        "info": "#8EA7E9",

        "neutral": "#FFFFFF",
        "neutral-content": "#000000",

        "success": "#F7F7F7",
        "error":"#000000",
        "accent": "#edfdfb",
        "warning":"#F5C22F"
      },

      light: {

        "primary": "#387373",

        "secondary": "#93BFB7",
        "base-300":"#E4F2E7",
        "neutral": "#FFFFFF",
        "neutral-content": "#000000",

        "accent": "#008C71",

       
  
        "error": "#FFFFFF",


        "info": "#333333",

        "success": "#FFD700",
      },
    },],
  },
  plugins: [require("daisyui")],
}

