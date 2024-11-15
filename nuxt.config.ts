// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "h5v7s3o0jVCOJGloIF3lBs6AWBkMjmi_kU8IXTsPQ4U",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    // Module Options
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
    defaultLocale: "ru", // Default Language
    locales: [
      { code: "ru", iso: "ru-RU", file: "ru.json" },
      { code: "uz", iso: "uz-UZ", file: "uz.json" },
      { code: "kk", iso: "kk-KZ", file: "kk.json" },
      { code: "ky", iso: "ky-KG", file: "ky.json" },
      { code: "tk", iso: "tk-TM", file: "tk.json" },
      { code: "tg", iso: "tg-TJ", file: "tg.json" },
    ],
  },
});
