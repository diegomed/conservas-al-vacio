<template>
    <div class="w-70 shadow-5 mt4 br4 h-fit-content bg-white-90 relative flex flex-row flex-wrap items-center justify-center">
        <div class="ma3 br3 w4">
            <img :src="product.img" alt="Foto del producto">
        </div>
        <div class="flex flex-wrap flex-row items-center justify-between">
            <p class="f2 f2-ns f2-m f2-l b ma3 text-conservas">{{ product.nameame }}</p>
            <p class="f1 ma3 text-conservas-header">${{ product.price }}</p>
        </div>
        <Bubble class="absolute top--1 left--1" color="primary">{{ product.quantity }}</Bubble>
        <Bubble @handle-click="closeButtonHandler" class="absolute top--1 right--1">X</Bubble>
    </div>
</template>

<script>
import Bubble from './Bubble'

export default {
  components: {
    Bubble
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeButtonHandler () {
      this.$emit('on-close', this.product.id)
    }
  }
}
</script>
