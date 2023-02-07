<script setup>
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
import Product from './components/Product.vue'

const store = useStore()

</script>

<template>
  <div class="container mx-auto text-center">
    <input type="text" v-model="search" class="border-4 border-indigo-500/100">
    <div v-for="product in filteredPost" :key="product.id">
      {{ product.name }}
    </div>
    <div class="flex flex-row space-x-4">
      <ProductsList />
      <Cart />
      <Product />
    </div>
  </div>
</template>