<template>
    <p @click="handleClick" :class="color === 'primary' ? 'bg-light-blue' : 'bg-silver'" class="f3 shadow-5 ma0 br-100 white pointer w2 h2 flex items-center justify-center">
        <slot></slot>
    </p>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('handle-click')
    }
  }
}
</script>
