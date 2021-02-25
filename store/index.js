export const state = () => ({
  isDesktop: false,
  toggleSidebar: false,
})

export const mutations = {
  GET_DEVICE_WIDTH(state, isDesktop) {
    state.isDesktop = isDesktop
  },
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
}

export const actions = {}

export const getters = {}
