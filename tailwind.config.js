module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#f4f4f5",
        lighter: "#fafafa",
        lightest: "#ffffff",

        dark: "rgb(27, 27, 37)",
        darker: "rgb(23, 23, 32)",
        darkest: "rgb(16, 16, 24)",
      },
    },
  },
};
