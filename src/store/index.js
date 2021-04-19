import { createStore } from 'vuex'

import authModule from './modules/auth.js'
import cartModule from './modules/cart.js'
import productsModule from './modules/products.js'
import loadingModule from './modules/loading.js'

export default createStore({
  modules: {
    auth: authModule,
    cart: cartModule,
    products: productsModule,
    loading: loadingModule
  }
})
