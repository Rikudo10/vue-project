<script setup>
import { useStore } from 'vuex'

const store = useStore()


const search = ""
const ChangeSearch = (e) => store.commit('ChangeSearch', e.target.value)



</script>

<template>
<nav class="myclass1 flex items-center justify-between flex-wrap bg-neutral-900	 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6 mydiv">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="50" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>

    <span class="font-semibold text-xl tracking-tight youtube"><a href="#">Youtube</a></span></svg>

  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mydiv2">
    <div class="text-sm lg:flex-grow">
      <input  type="text" placeholder="ძიება" v-model="search" @input="ChangeSearch" class=" mysearch">
    </div>
  </div>
</nav>

</template>

<style scoped>
.mydiv2 {
  padding-right: 220px;
}
.mysearch {
  width: 495px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  color: white;
  background-color: black;
  border: 1px solid white;
  padding-left: 20px;
}
.bi{
  color: red;
  width: 35px;
}
.youtube {
  height: 30px;
  width: 70px;
  font-size: 30px;
}
.mydiv {
  padding-left: 70px;
}
</style>