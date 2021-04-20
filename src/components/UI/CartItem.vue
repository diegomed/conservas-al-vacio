<template>
    <div class="w-70 shadow-5 mt4 br4 h-fit-content bg-white-90 relative flex flex-row flex-wrap items-center justify-center">
        <div class="ma3 br3 w4">
            <img :src="product.img" alt="Foto del producto">
        </div>
        <div class="flex items-center justify-between w-70">
            <p class="f2 b ma3 text-conservas">{{ product.nameame }}</p>
            <p class="f1 ma3 text-conservas-header">${{ product.price }}</p>
        </div>
        <p class="f3 shadow-5 absolute top--1 right--1 ma0 br-100 white bg-light-blue w2 h2 flex items-center justify-center">{{ product.quantity }}</p>
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
