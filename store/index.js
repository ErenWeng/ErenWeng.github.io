export const state = () => ({
  toggleSidebar: false,
  toggleTopic: true,
  articles: {},
})

export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  TOGGLE_TOPIC(state) {
    state.toggleTopic = !state.toggleTopic
  },
  GET_All_ARTICLES(state, articles) {
    state.articles = articles
  },
}

export const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  toggleTopic({ commit }) {
    commit('TOGGLE_TOPIC')
  },
  async getAllArticles({ commit }) {
    const basicArticlesUrl = 'http://localhost:3000/_content/articles'
    const filterData = [
      'title',
      'description',
      'img',
      'slug',
      'tags',
      'createdAt',
    ]
    let query = ''
    for (let i = 0; filterData.length > i; i++) {
      query = '?only=' + filterData.join('&only=')
    }
    const articlesUrl = `${basicArticlesUrl + query}`

    const res = await this.$axios.get(articlesUrl).catch((error) => {
      /* eslint-disable no-console */
      console.log(error)
    })
    const data = res.data

    const dataSort = data.sort(function (a, b) {
      return a.createdAt < b.createdAt ? 1 : -1
    })
    commit('GET_All_ARTICLES', dataSort)
  },
}
