export default {
  state () {
    return {
      cart: []
    }
  },
  mutations: {
    addProduct (state, payload) {
      state.cart = [...state.cart, payload]
    }
  },
  actions: {
    addToCart (context, payload) {
      context.commit('addProduct', payload)
    }
  },
  getters: {
    cart (state) {
      return state.cart
    }
  }
}
