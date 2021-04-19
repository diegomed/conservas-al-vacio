<template>
  <Header/>
  <div class="h-100 pt5">
    <Spinner v-if="this.$store.getters.isLoading"/>
    <router-view/>
  </div>
</template>

<script>
import Header from '../../components/layout/Header.vue'
import Spinner from '../../components/UI/LoadingSpinner'

export default {
  components: {
    Header,
    Spinner
  }
}
</script>
