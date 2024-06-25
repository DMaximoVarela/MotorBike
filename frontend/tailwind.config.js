/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "crimson-large": "0 0 6em rgba(202, 34, 34, 0.5)",
        "crimson-medium": "0 0 2.5em rgba(202, 34, 34, 0.5)",
        crimson: "0 0 1.5em rgba(202, 34, 34)",
        "crimson-sm": "0 0 .5em rgba(202, 34, 34)",
      },
      textShadow: {
        crimson: "0px 0px 24px rgba(202, 34, 34)",
      },
    },
    screens: {
      xsm: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1720px",
      "4xl": "1980px",
      "5xl": "2560px",
    },

    colors: {
      "crimson-red": {
        50: "#DD6666",
        100: "#C94D4D",
        200: "#B53333",
        300: "#CA2222", // Crimson Red
        400: "#A21919",
        500: "#B20000",
        600: "#8E0000",
        700: "#6C0101",
        800: "#4F0101",
        900: "#3C0000",
        950: "#320000",
      },
      "indigo-blue": {
        50: "#7188D9",
        100: "#5D76C4",
        200: "#4A64B0",
        300: "#38519B",
        400: "#263F86",
        500: "#1F3C88", // Indigo Blue
        600: "#162E73",
        700: "#0F1C5F",
        800: "#091A54",
        900: "#041849",
        950: "#031135",
      },
      "sunshine-yellow": {
        50: "#FEEB88",
        100: "#FDDC66",
        200: "#FED766", // Sunshine Yellow
        300: "#FCCD44",
        400: "#FABE22",
        500: "#F9AF00",
        600: "#DE9906",
        700: "#D78702",
        800: "#C97602",
        900: "#BD6702",
        950: "#AD5F04",
      },
      "ivory-white": {
        50: "#FDFDF6", // Ivory White
        100: "#ECECDE",
        200: "#DDDDD1",
        300: "#D4D4C9",
        400: "#CBCBBF",
        500: "#C6C6BB",
        600: "#BABAB2",
        700: "#AAAA9F",
        800: "#909087",
        900: "#7B7B72",
        950: "#686861",
      },
      "charcoal-black": {
        50: "#6D6D6D",
        100: "#616161",
        200: "#555555",
        300: "#484848",
        400: "#3C3C3C",
        500: "#292929",
        600: "#202020",
        700: "#212120", // Charcoal Black
        800: "#181818",
        900: "#0F0F0F",
        950: "#0B0B0B",
      },
    },
  },
  variants: {
    extend: {
      brightness: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-crimson": {
          textShadow: "0px 0px 24px rgba(202, 34, 34)",
        },
        ".text-shadow-black": {
          textShadow: "0px 0px 16px rgba(0, 0, 0, 0.5)",
        },
      });
    },
  ],
};
