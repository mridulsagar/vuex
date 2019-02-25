<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";

export default {
  name: "app",
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo
  },
  data() {
    return {
      products: [
        { name: "Banana", price: 20 },
        { name: "Orange", price: 40 },
        { name: "Apple", price: 60 },
        { name: "Mango", price: 80 }
      ]
    };
  }
};
</script>

<style>
body {
  color: #555;
}
</style>
