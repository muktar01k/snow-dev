/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('/src/assets/wallpapper.png')"
      }
    },
    screens: {
    
      "xr":"414px",
      "x":"375px",
      "sam":"360px",
    },
    // animation:{
    //   "bounce":bo
    // }   
  },
  plugins: [],
}


