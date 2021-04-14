<template>
    <section class="h-100 flex flex-row flex-wrap pv3 overflow-auto bg-black-10">
        <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    </section>
</template>

<script>
import ProductCard from '../../components/UI/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: [
        { id: 1, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 50 },
        { id: 2, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 25 },
        { id: 3, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 13 },
        { id: 4, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 51 },
        { id: 5, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 61 },
        { id: 6, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 65 },
        { id: 7, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 654 },
        { id: 8, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 2 },
        { id: 9, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 123 },
        { id: 10, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 53 }
      ]
    }
  }
}
</script>
