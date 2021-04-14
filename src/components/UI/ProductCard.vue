<template>
    <div class="w-20 h-75 m-2-5 br3 mw250 shadow-5 overflow-hidden bg-white-90">
        <div class="w-100 h-50">
            <img :src="product.img" alt="Product image" class="img br3 br--top">
        </div>
        <div class="w-100 h-50 overflow-hidden flex flex-column">
            <h1 class="w-100 h-50 ma0">{{ product.name }}</h1>
            <div class="w-100 h-50 flex justify-around">
                <div class="w-50 h-100 flex items-center justify-center">
                    <p class="ma0 f2 green">${{ product.price }}</p>
                </div>
                <div class="w-50 h-100 flex items-center justify-center">
                    <button class="h2 b--none br3 shadow-5 shadow-hover white-90 bg-blue">Ver detalles</button>
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
</style>
