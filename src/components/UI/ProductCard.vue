<template>
    <div class="h360 m-2-5 br3 w250 shadow-5 relative overflow-hidden bg-white-90">
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
                  <Button @handle-click="handleDetails">Ver Detalles</Button>
                </div>
            </div>
        </div>
        <Bubble @handle-click="handleAddButton" color="primary" class="absolute top-1 right-1">+</Bubble>
    </div>
</template>

<script>
import Button from './Button'
import Bubble from './Bubble'

export default {
  components: {
    Button,
    Bubble
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleDetails () {
      this.$emit('handle-details', this.product.id)
    },
    handleAddButton () {
      this.$emit('handle-add-button', this.product)
    }
  }
}
</script>

<style lang="scss" scoped>
    .m-2-5 {
        margin: 2.5%;
    }
    .w250 {
        width: 250px;
    }
    .h360 {
        height: 360px;
    }
</style>
