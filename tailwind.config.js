const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        dark: "#000000",
        light: "#fcfefd",
      },
      // fontFamily: {
      //   sans: ["Inter", ...fontFamily.sans],
      // },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
};
