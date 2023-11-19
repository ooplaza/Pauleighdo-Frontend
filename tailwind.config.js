module.exports = {
  theme: {
    extends: {
      fontFamily: {
        bitter: ["Bitter", "serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        sacramento: ["Sacramento", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        roobert: ["Roobert", "sans-serif"],
        portico: ["Portico", "sans-serif"],
        baybayin: ["Baybayin", "sans-serif"],
        gameboy: ["Gameboy", "sans-serif"],
      },
    },
  },

  darkMode: "class",

  plugins: [
    // require('@tailwindcss/line-clamp'),
    require("flowbite/plugin"),
  ],

  content: ["./node_modules/flowbite/**/*.js"],
};
