module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    screens: {
      xs: { max: "480px" },
      sm: { min: "481px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px" },
      xssm: { max: "768px" },
      smmd: { min: "481px", max: "1024px" },
      mdlg: { min: "769px" },
    },

    container: {
      center: true,
    },
    extend: {
      colors: {
        logo1: "#abc2e8",
        logo2: "white",
        logo3: "#00878a",
        logo4: "#ffa12e",
        icon1: "#970b7d",
        icon2: "#9ED44E",
        advise: "#ffc740",
        black: "black",
        white: "white",
        error: "#da0101",
        lightgray: "#f6f6f6",
        alert: {
          error: "#ff7272",
          success: "#b5ead7",
        },
      },
    },
  },
  variants: {},
};
