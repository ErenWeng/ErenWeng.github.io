export const state = () => ({
  toggleSidebar: false,
  toggleTagList: true,
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
}
