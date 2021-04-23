export default {
  state () {
    return {
      cart: []
    }
  },
  mutations: {
    addProduct (state, payload) {
      const repeatedItemIndex = state.cart.findIndex(item => item.id === payload.id)
      if (repeatedItemIndex !== -1) {
        state.cart[repeatedItemIndex].quantity++
      } else {
        state.cart = [...state.cart, payload]
      }
    },
    deleteProduct (state, payload) {
      const indexToRemove = state.cart.findIndex(item => item.id === payload)
      if (state.cart[indexToRemove].quantity === 1) {
        state.cart = [...state.cart.slice(0, indexToRemove), ...state.cart.slice(indexToRemove + 1)]
      } else {
        state.cart[indexToRemove].quantity--
      }
    }
  },
  actions: {
    addToCart (context, payload) {
      context.commit('addProduct', payload)
    },
    deleteFromCart (context, payload) {
      context.commit('deleteProduct', payload)
    }
  },
  getters: {
    cart (state) {
      return state.cart
    },
    totalCartItems (state, getters) {
      if (getters.cart.length) {
        return getters.cart.reduce((total, value) => {
          return total + value.quantity
        }, 0)
      }
    },
    totalPrice (state, getters) {
      if (getters.cart.length) {
        return getters.cart.reduce((total, value) => {
          return total + value.price * value.quantity
        }, 0)
      }
    }
  }
}
