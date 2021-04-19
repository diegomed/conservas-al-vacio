<template>
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
            <button @click="addToCart" class="h2 w-100-ns w-50-l self-center b--none br3 shadow-5 shadow-hover white-90 bg-blue">Añadir al carrito</button>
        </div>
    </section>
</template>

<script>
import shopMixin from '../../mixins/shop'

export default {
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
      this.$store.dispatch('addToCart', this.product)
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
