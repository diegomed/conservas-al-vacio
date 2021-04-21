<template>
  <router-view/>
</template>

<style lang="scss">
@import "tachyons";

html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.bg-conservas {
  background-color: #f6ecd7;
}

.bg-conservas-strong {
  background-color: #b3876c;
}

.bg-conservas-light {
  background-color: #bb944c;
}

.bg-conservas-waterfall {
  background-color: #fff6ec;
}

.text-conservas {
  color: #81461a;
  font-family: 'Open Sans';
}

.text-conservas-header {
  color: #bb944c;
  font-family: 'Yellowtail';
}

.h-fit-content {
  height: fit-content;
}

.top-5 {
  top: 5rem;
}

.left-5 {
  left: 5rem;
}
</style>
