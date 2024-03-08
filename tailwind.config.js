/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},

      'my':{'max':'980'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        customInsta:"#c13584",
        customBlack: "#353b41",
        customGreen: "#2bc777",
        customPara: "#919d9c",
        customGrey: "#cccbcc",
        customGrad1: "#159957",
        customGrad2: "#155799",
        customGrad3: "#30E8BF",
        customGrad4: "#FF8235",
        customGrad5: "#8e9eab",

        customGrad6: "#eef2f3",


      },
    },
  },
  plugins: [],
};
