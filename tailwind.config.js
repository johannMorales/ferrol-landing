const {
  colors: { white, black, gray, transparent },
  fontFamily,
} = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      ...fontFamily,
      sans: ["Lato", "sans-serif"],
    },
    colors: {
      transparent,
      white,
      black,
      primary: {
        default: "#1C4183",
      },
      muted: {
        default: "#938F8F",
      },
      secondary: "#ffed4a",
      danger: "#e3342f",
      gray
    },
  },
};
