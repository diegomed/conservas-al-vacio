<template>
  <div class="absolute top-5 left-5">
    <GoBackArrow/>
  </div>
  <section class="h-100 w-100 flex flex-row flex-wrap bg-conservas">
      <div class="h-75 h-75-ns h-75-m h-100-l w-100 w-100-ns w-100-m w-50-l flex justify-center items-center">
          <div class="w-75 br3">
              <img :src="product.img" alt="Imagen del producto" class="img br3 shadow-5">
          </div>
      </div>
      <div class="h-100 w-100 w-100-ns w-100-m w-50-l flex flex-column justify-start justify-start-ns justify-start-m justify-center-l">
          <h1 class="text-conservas">{{ product.nameame }}</h1>
          <h1 class="f1 text-conservas-header">${{ product.price }}</h1>
          <div class="flex flex-wrap items-center justify-center">
            <Button @handle-click="addToCart" class="ma2 w-90 w-90-ns w-90-m w-30-l self-center">Añadir al carrito</Button>
            <Button @handle-click="$router.push('/shop/cart')" class="ma2 w-90 w-90-ns w-90-m w-30-l self-center">Ver carrito</Button>
          </div>
      </div>
  </section>
</template>

<script>
import shopMixin from '../../mixins/shop'
import GoBackArrow from '../../components/UI/GoBackArrow'
import Button from '../../components/UI/Button'

export default {
  components: {
    GoBackArrow,
    Button
  },
  mixins: [
    shopMixin
  ],
  data () {
    return {
      product: {}
    }
  },
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', { ...this.product, quantity: 1 })
    }
  },
  created () {
    this.$store.dispatch('toggleLoading', true)
    this.getProductById(this.$route.params.id)
      .then(res => {
        this.product = res.data
        this.$store.dispatch('toggleLoading', false)
      })
  }
}
</script>
