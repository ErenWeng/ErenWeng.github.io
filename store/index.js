export const state = () => ({
  toggleSidebar: false,
  toggleTagList: true,
  tagsCount: [],
})

export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  TOGGLE_TAG_LIST(state) {
    state.toggleTagList = !state.toggleTagList
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
  async fetchTagsCount({ commit }) {
    const baseURL = `http://localhost:3000/_content/`
    const filter = `articles?only=tags`
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
    tagsData = Object.keys(tagsCountData).map((el) => ({
      name: el,
      slug: el.replace(' ', '_'),
      count: tagsCountData[el],
    }))

    commit('FETCH_TAGS_COUNT', tagsData)
  },
}
