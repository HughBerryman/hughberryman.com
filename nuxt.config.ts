// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "text/javascript",
          href: "https://assets.calendly.com/assets/external/widget.js",
        },
      ],
      script: [
        { src: "https://assets.calendly.com/assets/external/widget.js" },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image"], // https://nuxt.com/modules/icon
});
