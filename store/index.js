export const state = () => ({
  toggleSidebar: false,
  toggleTagList: true,
  tagsCount: [],
  isLoading: true,
  colorTheme: 'light',
})

export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  TOGGLE_TAG_LIST(state) {
    state.toggleTagList = !state.toggleTagList
  },
  SET_LOADING(state, status) {
    state.isLoading = status
  },
  SET_COLOR_THEME(state, status) {
    state.colorTheme = status
  },
  FETCH_TAGS_COUNT(state, params) {
    state.tagsCount = params
  },
}

export const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  toggleTagList({ commit }) {
    commit('TOGGLE_TAG_LIST')
  },
  setLoading({ commit }) {
    document.onreadystatechange = () => {
      if (document.readyState === 'loading') commit('SET_LOADING', true)
      if (document.readyState === 'complete') commit('SET_LOADING', false)
    }
  },
  setColorTheme({ commit }, type) {
    const htmlElement = document.documentElement
    commit('SET_COLOR_THEME', type)
    localStorage.setItem('color-mode', type)
    htmlElement.setAttribute('color-mode', type)
  },
  async fetchTagsCount({ commit, app }) {
    const baseURL = app.$config.axios.baseURL
    const filter = `/_content/articles?only=tags`
    const tagAPI = await this.$axios.$get(`${baseURL}${filter}`)

    const allTagsInArray = []
    let allTags = []
    const tagsCountData = {}
    let tagsData = []

    for (const idx in tagAPI) {
      allTagsInArray.push(tagAPI[idx].tags)
    }
    allTags = [].concat.apply([], allTagsInArray).sort()
    allTags.forEach((tag) => {
      if (!tagsCountData[tag]) tagsCountData[tag] = 0
      tagsCountData[tag]++
    })
    delete tagsCountData.undefined
    tagsData = Object.keys(tagsCountData).map((el) => ({
      name: el,
      slug: el.replace(' ', '_'),
      count: tagsCountData[el],
    }))

    commit('FETCH_TAGS_COUNT', tagsData)
  },
}
