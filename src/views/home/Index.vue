<template>
  <div>
    <h1>{{ this.$store.getters.greet }}</h1>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  created () {
    this.$store.dispatch('greetAction')
  }
}
</script>
