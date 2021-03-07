export const state = () => ({
  toggleSidebar: false,
  toggleTopic: true,
})

export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  TOGGLE_TOPIC(state) {
    state.toggleTopic = !state.toggleTopic
  },
}

export const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  toggleTopic({ commit }) {
    commit('TOGGLE_TOPIC')
  },
}
