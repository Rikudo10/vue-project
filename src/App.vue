<script setup>
import myProduct from './components/usejs'

const { products, getProducts, Krig, product, limitChange, range, langs, lang,  } = myProduct()

</script>

<template>

<select @change="limitChange" >
    <option v-for="amount in range" :key="amount.index" :value="amount">Per Page: {{ amount }}</option>
  </select>

  <select v-model="lang" @change="getProducts" >
    <option v-for="lang1 in langs" :key="lang1.index" :value="lang1">{{ lang1 }}</option>
  </select>

  <table>
    <thead>
      <th>Id</th>
      <th>Name</th>
      <th>Details</th>
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
    <button @click.prevent="getProducts(Krig.first_page_url)" :disabled="!Krig?.first_page_url">first</button>
    <button @click.prevent="getProducts(Krig?.prev_page_url)" :disabled="!Krig?.prev_page_url">prev</button>
    <button @click.prevent="getProducts(Krig?.next_page_url)" :disabled="!Krig?.next_page_url">next</button>
    <button @click.prevent="getProducts(Krig.last_page_url)" :disabled="!Krig?.last_page_url">last</button>
  </div>

</template>