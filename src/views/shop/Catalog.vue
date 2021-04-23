<template>
  <section class="flex justify-center w-100">
    <div class="h-100 flex flex-row flex-wrap pv3 overflow-auto bg-conservas catalog-width">
      <ProductCard v-for="(product, index) in products" :key="index" :product="product" @handle-details="goToDetailsHandler" @handle-add-button="addToCartHandler" />
    </div>
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
    },
    addToCartHandler (product) {
      this.$store.dispatch('addToCart', { ...product, quantity: 1 })
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

<style scoped>
  @media screen and (max-width: 1500px) and (min-width: 1250px) {
    .catalog-width {
        max-width: 1250px;
    }
  }
  @media screen and (max-width: 1249px) and (min-width: 900px) {
    .catalog-width {
        max-width: 900px;
    }
  }
  @media screen and (max-width: 899px) and (min-width: 560px) {
    .catalog-width {
        max-width: 560px;
    }
  }
  @media screen and (max-width: 559px) {
    .catalog-width {
        max-width: 270px;
    }
  }
</style>
