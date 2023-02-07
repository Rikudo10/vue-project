<script setup>
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
import Product from './components/Product.vue'


</script>

<template>
  <div class="container mx-auto text-center">
    <div class="flex flex-row space-x-4">
      <ProductsList />
      <Cart />
      <Product />
    </div>
  </div>
</template>