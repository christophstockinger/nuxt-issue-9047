// import { join } from 'path'

export default {
  ssr: false,
  head: {
    titleTemplate: '%s | Test',
    title: 'Test',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },
  css: ['~/assets/scss/tailwind.scss', '~/assets/scss/fonts.scss'],
  plugins: ['~/plugins/axios.js'],
  components: true,
  buildModules: [
    // '@nuxt/typescript-build',
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],
  modules: ['@nuxtjs/axios'],
  build: {
    postcss: {
      plugins: {
        // tailwindcss: join(__dirname, 'tailwind.config.js'),
        '@tailwindcss/jit': {},
        autoprefixer: {},
      },
    },
    extractCSS: process.env.NODE_ENV === 'production',
    terser: {
      parallel: true,
      cache: false,
      sourceMap: false,
      extractComments: false,
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
        },
        output: {
          comments: false,
        },
      },
    },
  },
  // axios: {
  //   baseURL: process.env.apiUrl,
  //   retry: { retries: 3 },
  //   headers: {
  //     common: {
  //       Accept: 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json',
  //     },
  //   },
  // },
  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.apiUrl,
  //   },
  // },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
}
