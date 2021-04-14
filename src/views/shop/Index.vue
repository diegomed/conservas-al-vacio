<template>
  <Header/>
  <div class="h-100 pt5">
    <router-view/>
  </div>
</template>

<script>
import Header from '../../components/layout/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
