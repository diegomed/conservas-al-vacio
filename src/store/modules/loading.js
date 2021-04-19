export default {
  state () {
    return {
      loading: false
    }
  },
  mutations: {
    toggleLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    toggleLoading (context, payload) {
      context.commit('toggleLoading', payload)
    }
  },
  getters: {
    isLoading (state) {
      return state.loading
    }
  }
}
