<template>
  <div>
    <h1>{{ this.$store.getters.greet }}</h1>
    <Spinner/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Spinner from '../../components/UI/LoadingSpinner'

export default {
  name: 'Home',
  components: {
    Spinner
  },
  created () {
    this.$store.dispatch('greetAction')
  }
}
</script>
