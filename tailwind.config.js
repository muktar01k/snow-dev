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
    
      "sm": { "min": "300px", "max": "500px" },
      "smr": "375px",
      "smx": "390px",
      "smxx": "360px",
      "pro": "428px",
      "md": { "min": "768px", "max": "1000px" },
      // "mdx": { "min": "1001px", "max": "1700px" },
      // "lg":{"min": "1024px","max":""}

      "lg":{"min":"1001", "max":"1300px"}
    },
    // animation:{
    //   "bounce":bo
    // }   
  },
  plugins: [],
}


