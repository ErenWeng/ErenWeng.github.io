export default {
  target: 'static',
  router: {
    base: '/',
  },
  head: {
    title: "Eren's blog",
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
  loading: { height: '0px' },
  css: ['@/assets/css/index.scss', '@/assets/css/normalize.css'],
  plugins: [{ src: '@/plugins/scrollactive', ssr: false }],
  components: {
    dirs: [
      '~/components',
      '~/components/layout',
      '~/components/page',
      '~/components/blog',
    ],
  },
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: ['@nuxtjs/axios', '@nuxt/content'],
  styleResources: {
    scss: ['@/assets/css/index.scss'],
  },
  axios: {
    baseURL: 'production'
      ? 'https://erenweng.github.io'
      : 'http://localhost:8000',
  },
  content: {},
  build: {},
  server: {
    port: 8000,
  },
}
