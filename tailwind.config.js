/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0B0124",
        // #050816
        // #00131A
        halft: "#050816bd",
        // #050816bd
        // #
        secondary: "#88a3cc",
        // #aaa6c3
        // #88a3cc

        secondaryHover: "rgb(21 16 58 )",
        tertiary: "#1A171E",
        // #151030
        // #102030
        "black-100": "#0d1425",
        // 100d25
        // background-color: #0d1425;
        "black-200": "#09253c",
        // #090325
        // #161f34
        "white-100": "#f3f3f3",
        // #915eff

        // #257cf0
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
