export const state = () => ({
  isDesktop: false,
})

export const mutations = {
  GET_DEVICE_WIDTH(state, isDesktop) {
    state.isDesktop = isDesktop
  },
}

export const actions = {}

export const getters = {}
