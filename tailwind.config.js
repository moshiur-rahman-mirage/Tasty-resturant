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

   // #edfdfb    background 
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

        "primary": "#004C3F",

        "secondary": "#008C71",

        "accent": "#008C71",

        "neutral": "#000000",
  
        "error": "#FFFFFF",


        "info": "#333333",

        "success": "#FFD700",
      },
    },],
  },
  plugins: [require("daisyui")],
}

