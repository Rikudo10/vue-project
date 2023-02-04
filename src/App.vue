<script setup>
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
import Product from './components/Product.vue'

const pageTitle = "State Problem"

</script>

<template>
  <div class="container mx-auto text-center">
    <h1 class="text-3xl font-bold pt-4">{{ pageTitle }}</h1>
    <div class="flex flex-row space-x-4">
      <ProductsList />
      <Cart />
      <Product />
    </div>
  </div>
</template>