import { createStore } from 'vuex'

export default createStore({
  state: {
    selection: [],
  },
  mutations: {
    setFilter(state, newValue) {
      state.selection = newValue
    },
  },
  actions: {
    setFilter({ commit }, newValue) {
      commit('setFilter', newValue)
    },
  },
  getters: {},
  modules: {},
})
