/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        PrimaryDark: "#043F9E",
        PrimaryBright1: "#0149D1",
        PrimaryBright2: "#0661F3",
        TextDark: "#333333",
        TextLight: "#757575",
        TextWhite: "#FFFFFF",
        Gray1: "#FAFAFA",
        Gray2: "#BCBFBF",
        DarkRed1: "#BA1E45",
        DarkRed2: "#EF3061",
        Pink: "#FF08C2",
        DarkPink: "#B2158B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
