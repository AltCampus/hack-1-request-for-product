module.exports = {
  purge: [
    {
      mode: "layers",
      content: ["./views/**/**.ejs"],
    },
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cwc: {
          red: "#E84977",
          blue: "#49AADE",
          gray: "#222222",
        },
      },
    },
    fontFamily: { Cantata: ["Cantata One", "serif"] },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
