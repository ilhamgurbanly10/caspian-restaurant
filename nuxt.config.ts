// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt3-vuex-module',
    '@ant-design-vue/nuxt'
  ],
  css: ['~/assets/styles/main.scss', '~/assets/styles/main.css'],
  devtools: { enabled: true },
  image: {
    inject: true,
    quality: 50,
    format: ['webp'],
    domains: ['nuxtjs.org']

  },
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
      API_URL: process.env.API_URL,

    },
  },
  antd:{
    // Options
  }
})
