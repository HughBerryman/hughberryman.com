// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "nuxt-module-hotjar", "nuxt-gtag"], // https://nuxt.com/modules/icon
  // And add your hotjar site id and the script version
  hotjar: {
    hotjarId: 5001530,
    scriptVersion: 6,
    // optionally you can turn on debug mode for development
    debug: process.env.NODE_ENV === "development",
  },
  gtag: {
    id: "G-PH9Z9S5T5F",
  },
});
