/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightText: '#1F2937', // Tailwind's gray-800
        darkText: '#f3f4f6', 
        lightBackground: '#303030', 
        darkBackground: '#212121',
        backgroundColor: '#5d5bd0',
        buttonBackground:'#4d4b99' // Tailwind's gray-100
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to left, #bfdbfe, #67e8f9)', // blue-200 to cyan-200
      },
    },
  },
  plugins: [],
}