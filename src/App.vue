<script>
import myProducts from './components/usejs'

const {   myProducts,  res, getProducts ,products } = myProducts()
       
        
</script>

<template>
  
  <table >
    <thead>
      <tr>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Cover Image</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td><img :src="item.img.cover" /></td>
      </tr>
    </tbody>
  </table>
  <div>
  <a href="#" :disabled="!res?.first_page_url" @click.prevent="firstPage">First Page</a>
  <button :disabled="!res?.prev_page_url" @click.prevent="prevPage">Previous</button>
  <button :disabled="!res?.next_page_url" @click.prevent="nextPage">Next Page</button>
  <a href="#" :disabled="!res?.last_page_url" @click.prevent="lastPage">Last Page</a>
</div>
</template>
<style>
</style>