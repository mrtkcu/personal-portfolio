/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        grey: "#777777",
        lightblack: "#0A0A14",
        pink: "#E92577",
        darkpink: "#AF0C48",
        lightpink: "#EA2678",
        lightblue: "#70a1ff",
        lightgrey: "#D9D9D9",
        darkwhite: "#F4F4F4",
        blue: "#0077B5",
        skyblue: "#038FD6",
        blue3: "#67e6dc",
        lightblack2: "#525252",
        // For transparency, use an RGBA utility or specify transparency manually
        blacktransparent: "rgba(82, 82, 82, 0.5)",
        purple: "#764ABC",
        white3: "#D9F6F1",
        white4: "#DDEEFE",
        yellow: "#FFE86E",
        darkyellow: "#f6b93b",
        projectdark: "#A5BFCC",
      },
      screens: {
        "xl-sm": { max: "1480px" },
        "lg-sm": { max: "1125px" },
        "lg-sm2": { max: "1072px" },
        sm2: { max: "813px" },
        xs: { max: "522px" },
      },
    },
  },
  plugins: [],
};
