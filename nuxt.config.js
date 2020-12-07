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
  css: [
    '@/assets/styles/normalize.min.css',
    '@/assets/styles/typography.scss',
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      preconnect: true,
      families: {
        'Montserrat': true,
        'Roboto': true,
        'JetBrains+Mono': true,
      }
    }],
  ],
  modules: [
    '@nuxtjs/moment',
    '@nuxt/content',
  ],
  content: {},
  build: {},
}
