const cacheTTL = 60 * 60 * 24 * 365; // 1 year – you can set this to whatever you want

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Storipod Admin',
      meta: [{ name: 'description', content: '“Transforming data into actionable insights.”' }],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  css: ['@/assets/scss/main.scss'],
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/img/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
      '/_nuxt/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
    },
  },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/google-fonts', 'nuxt-headlessui', '@nuxtjs/tailwindcss'],
  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },
  headlessui: {
    // https://nuxt.com/modules/headlessui
    prefix: 'Headless',
  },
  googleFonts: {
    // https://google-fonts.nuxtjs.org/getting-started/options
    families: {
      Inter: [100, 300, 400, 500, 600, 700],
    },
  },
});
