<template>
    <button @click="handleClick" class="h2 b--none button br3 white-90 bg-inherit hover-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$emit('handle-click')
    }
  }
}
</script>

<style scoped>
.hover-button:hover {
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.4 );
}
.button {
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    background-color: #eee;
    color: #999;
}
</style>
