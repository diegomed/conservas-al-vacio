<template>
  <div>
    <h1>{{ greetings }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      greetings: 'Loading...'
    }
  },
  methods: {
    getHelloWorld () {
      axios.get('https://sandbox.api.service.nhs.uk/hello-world/hello/world')
        .then(res => {
          this.greetings = res.data.message
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  created () {
    this.getHelloWorld()
  }
}
</script>
