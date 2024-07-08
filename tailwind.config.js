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
      'lightgray2': '#f7f5f5',
      'transparent' : 'transparent',
    },

    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
      Acme: ["Acme", "sans-serif"],
    },

    animation: {
      spin : 'spin 6s linear infinite'
    },
   
    extend: {
    },
  },
  plugins: [],
};
