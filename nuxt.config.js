export default {
  target: 'static',
  head: {
    title: 'Hamsplaining',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', href: '/favicon.svg' }],
  },
  static: {

  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxt/content',
  ],
  content: {},
  build: {},
}
