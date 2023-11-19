// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-icon", "@nuxt/image", "@pinia/nuxt"],
  app: {
    head: {
      title: "Pauleighdo",
      meta: [],

      link: [{ rel: "icon", type: "image/x-icon", href: "/Icon 2.png" }],
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "light", // This will set the preference to dark mode
  },
});
