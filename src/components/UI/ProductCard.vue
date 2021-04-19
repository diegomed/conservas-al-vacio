<template>
    <div class="w-20 h360 m-2-5 br3 mw250 shadow-5 overflow-hidden bg-white-90">
        <div class="w-100 h-50">
            <img :src="product.img" alt="Product image" class="img br3 br--top">
        </div>
        <div class="w-100 h-50 overflow-hidden flex flex-column">
            <h1 class="w-100 h-50 pv3 ma0 text-conservas">{{ product.nameame }}</h1>
            <div class="w-100 h-50 flex justify-around">
                <div class="w-50 h-100 flex items-center justify-center">
                    <p class="ma0 f1 text-conservas-header">${{ product.price }}</p>
                </div>
                <div class="w-50 h-100 flex items-center justify-center">
                    <button @click="handleDetails" class="h2 b--none br3 shadow-5 shadow-hover white-90 bg-blue">Ver detalles</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleDetails () {
      this.$emit('handle-details', this.product.id)
    }
  }
}
</script>

<style lang="scss" scoped>
    .m-2-5 {
        margin: 2.5%;
    }
    .mw250 {
        min-width: 250px;
    }
    .h360 {
        height: 360px;
    }
</style>
