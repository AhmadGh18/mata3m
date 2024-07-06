/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      'white': '#fff',
      'orange':'#f55c26',
      'grayish':'#f4e9e6',
      'brownish':'#caa8a3',
      'black':'#000000',
      'gray':'#717573',
      'darkorange': '#d26414',
      'lightorange': '#fa972f',
      'lightgray': '#f3f3f3',
      'light-green': '#e9fdb6',
      'dark-green' : '#789138',
      'transparent' : 'transparent',
    },

    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
    },
   
    extend: {
    },
  },
  plugins: [],
};
