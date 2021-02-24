export default {
  target: 'static',
  head: {
    title: 'my-blog',
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
  css: [],
  plugins: [],
  components: {
    dirs: ['~/components', '~/components/page'],
  },
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['@/assets/css/index.scss'],
  },
  axios: {},
  content: {},
  build: {},
}
