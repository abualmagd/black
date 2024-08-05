/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
        // eslint-disable-next-line no-undef
        require('daisyui'),
  ],
  daisyui:{
    themes:[
      {     mytheme: {
        "primary": "#FF4900",
        "secondary": "#FFB822",
        "accent": "#37cdbe",
        "neutral": "#3C3C3C",
        "base-100": "#242424",
      },
},
      
      "light", "dark"]
  }
}

