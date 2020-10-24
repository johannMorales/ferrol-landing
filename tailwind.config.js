const {
  colors: { white, black, gray },
  fontFamily,
} = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ["Lato", "sans-serif"],
    },
    colors: {
      white,
      black,
      primary: {
        default: "#1c4183",
      },
      muted: {
        default: "#656565",
      },
      secondary: "#ffed4a",
      danger: "#e3342f",
      gray
    },
  },
};
