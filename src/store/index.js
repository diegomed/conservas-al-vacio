import { createStore } from 'vuex'

import authModule from './modules/auth.js'
import cartModule from './modules/cart.js'
import productsModule from './modules/products.js'

export default createStore({
  modules: {
    auth: authModule,
    cart: cartModule,
    products: productsModule
  }
})
