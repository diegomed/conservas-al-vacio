import axios from 'axios'
import { environments } from '@/environments/environments.js'

export default {
  state () {
    return {
      greetings: 'Loading...'
    }
  },
  mutations: {
    greetMutation (state, payload) {
      state.greetings = payload.message
    }
  },
  actions: {
    greetAction (context) {
      axios.get(environments.apiUrl.helloWorld)
        .then(res => {
          context.commit('greetMutation', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  getters: {
    greet (state) {
      return state.greetings
    }
  }
}
