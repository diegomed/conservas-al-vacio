export const environments = {
  apiUrl: {
    helloWorld: `${process.env.VUE_APP_HELLO_WORLD_API}/hello-world`,
    shop: {
      catalog: `${process.env.VUE_APP_HELLO_WORLD_API}/shop/catalog`,
      productDetail: `${process.env.VUE_APP_HELLO_WORLD_API}/shop/catalog`
    }
  }
}
