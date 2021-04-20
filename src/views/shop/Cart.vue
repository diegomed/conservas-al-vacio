<template>
    <section class="h-100 flex flex-column items-center overflow-auto">
        <GoBackArrow/>
        <CartItem v-for="(item, index) in cart" :key="index" :product="item"/>
        <div class="w-70 mv3 flex justify-end">
            <p class="text-conservas f2 b">Total: <span class="text-conservas-header f1 normal">$1050</span></p>
            <div class="flex items-center">
                <button class="h2 f3 mh3 b--none br3 shadow-5 shadow-hover white-90 bg-blue">Comprar!</button>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from '../../components/UI/CartItem'
import GoBackArrow from '../../components/UI/GoBackArrow'

export default {
  components: {
    CartItem,
    GoBackArrow
  },
  computed: {
    ...mapGetters(['cart'])
  }
}
</script>
