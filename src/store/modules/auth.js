import axios from 'axios'

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
      axios.get('https://sandbox.api.service.nhs.uk/hello-world/hello/world')
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
