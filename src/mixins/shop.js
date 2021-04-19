import axios from 'axios'
import { environments } from '@/environments/environments.js'

export default {
  methods: {
    getProductsCatalog () {
      return axios.get(environments.apiUrl.shop.catalog)
    },
    getProductById (id) {
      return axios.get(`${environments.apiUrl.shop.productDetail}/${id}`)
    }
  }
}
