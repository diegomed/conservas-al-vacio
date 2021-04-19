<template>
  <section class="h-100 flex flex-row flex-wrap pv3 overflow-auto bg-conservas">
    <ProductCard v-for="(product, index) in products" :key="index" :product="product" @handle-details="goToDetailsHandler" />
  </section>
</template>

<script>
import ProductCard from '../../components/UI/ProductCard.vue'
import shopMixin from '../../mixins/shop'

export default {
  components: {
    ProductCard
  },
  mixins: [
    shopMixin
  ],
  data () {
    return {
      products: []
    }
  },
  methods: {
    goToDetailsHandler (id) {
      this.$router.push('/shop/catalog/' + id)
    }
  },
  created () {
    this.$store.dispatch('toggleLoading', true)
    this.getProductsCatalog()
      .then(res => {
        this.products = res.data
        this.$store.dispatch('toggleLoading', false)
      })
  }
}
</script>
