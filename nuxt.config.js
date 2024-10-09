// nuxt.config.js
export default {
  // Disable server-side rendering
  ssr: false,

  // Target: serverless and static & SSG
  target: 'serverless',

  // Global page headers
  head: {
    title: 'Shubh Garg',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration
  axios: {},

  // PWA module configuration
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration
  build: {},
}