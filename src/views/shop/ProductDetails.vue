<template>
  <div class="ml5 h3">
    <GoBackArrow/>
  </div>
  <section class="h-100 w-100 flex flex-row bg-conservas">
      <!-- <h1>Pagina de detalle de producto numero {{ $route.params.id }}</h1> -->
      <div class="h-100 w-50 flex justify-center items-center">
          <div class="w-75 br3">
              <img :src="product.img" alt="Imagen del producto" class="img br3 shadow-5">
          </div>
      </div>
      <div class="h-100 w-50 flex flex-column justify-center">
          <h1 class="text-conservas">{{ product.nameame }}</h1>
          <h1 class="f1 text-conservas-header">${{ product.price }}</h1>
          <div class="flex items-center justify-center">
            <button @click="addToCart" class="h2 ma2 w-30 self-center b--none br3 shadow-5 shadow-hover white-90 bg-blue">Añadir al carrito</button>
            <button @click="$router.push('/shop/cart')" class="h2 ma2 w-30 self-center b--none br3 shadow-5 shadow-hover white-90 bg-blue">Ver carrito</button>
          </div>
      </div>
  </section>
</template>

<script>
import shopMixin from '../../mixins/shop'
import GoBackArrow from '../../components/UI/GoBackArrow'

export default {
  components: {
    GoBackArrow
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
