/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      neutral: {
        50: "#F9FAFA",
        100: "#F3F4F5",
        200: "#E7EAEB",
        300: "#D6DADB",
        400: "#B8C5CA",
        500: "#94A5AB",
        600: "#808C91",
        700: "#576B74",
        800: "#36474F",
      },
      primary: {
        100: "#F3B7B3",
        200: "#EC938D",
        300: "#E67068",
        400: "#E04C42",
        500: "#DA281C",
        600: "#B62117",
        700: "#911B13",
        800: "#6D140E",
      },
      secondary: {
        50: "#FFF4D5",
        100: "#FFECB9",
        200: "#FFE395",
        300: "#FFDA72",
        400: "#FFD04F",
        500: "#FFC72C",
        600: "#D4A625",
        700: "#AA851D",
        800: "#806416",
        900: "#55420F",
      },
      // ...
    },
    boxShadow: {
      xs: "0 12px 24px -10px #B3B6BA0D",
      sm: "0 24px 32px -15px #A8AFB626",
      md: "0 32px 48px -20px #64707A26",
      lg: "0 48px 56px -25px #64707A26",
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
