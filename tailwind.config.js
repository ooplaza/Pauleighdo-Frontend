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
      backgroundImage: {
        'logo-dark-pattern': "url('/Pattern - dark.png')",
        'logo-light-pattern': "url('/Pattern - light.png')"
      }
    },
  },

  darkMode: "class",

  plugins: [
    // require('@tailwindcss/line-clamp'),
    require("flowbite/plugin"),
    require("daisyui"),
  ],

  content: [
      "./node_modules/flowbite/**/*.js",
      "node_modules/preline/dist/*.js",
  ],
};
