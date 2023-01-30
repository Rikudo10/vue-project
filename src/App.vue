<script>
import axios from 'axios'
export default {
    components:{
        
    },
  data() {
    return {
      limit: 10,
      lang: 'ge',
      apiUrl: "http://items.magischer.de/api/products",
      products: [],
    }
  },
  mounted() {
    axios.get(this.apiUrl, {params: { limit: this.limit, lang: this.lang}})
    .then(Response => this.products = Response.data.data)
  }
}
</script>

<template>
  <h1>Here {{ apiUrl }}</h1>
  <table>
    <thead>
      <tr>
        <th>Product Id</th>
        <th>Product Name</th>
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

</template>
<style>

</style>