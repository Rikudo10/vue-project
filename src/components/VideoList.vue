<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const filteredPost = computed(() => store.getters.filteredPost)


</script>
<template>
    <div class="mtavari w-full">
      <div>
        <nav class="mynav bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="menuul flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">ყველა</a>
        </li>
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ანიმე</a>
        </li>
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">მუსიკა</a>
        </li>
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">სერიალები</a>
        </li>
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ფილმები</a>
        </li>
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">მიქსები</a>
        </li>
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">თამაშები</a>
        </li>
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ჰიპ-ჰოპი</a>
        </li>
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ცეკვა</a>
        </li>
        <li>
          <a href="#" class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ერისიონი</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        
      </div>
        <ul class="myul">
            <div class="div1 p-10 grid grid-cols-4 gap-4">  
                <li v-for="item in filteredPost" :key="item.index" class="justify-between items-center">
    <!--Card 1-->
    <div class="max-w-sm overflow-hidden shadow-lg">
        <a :href="item.url">
          <router-link :to="{ name: 'info', params: { id: item.id}}" >
            <img :src="item.cover">
                </router-link>
              </a> 
      <div class="cart px-6 py-4">
        <span class="title">{{ item.title }} </span>
      <div class="photodiv">
        <img class="photo" :src="item.photo"> {{ item.name }}
      </div>
     <span class="views">{{ item.views }}</span> 
      </div>
    </div>
</li>
  </div>
        </ul>
    </div>
</template>

<style scoped>
.mya:hover{
  background-color: rgb(117, 116, 116);
}
.mya {
    height: 32px;
    border: none;
    width: 92px;
    background-color: #272727;
}
.mynav {
  background-color: black;
}
.menuul {
  padding-left: 170px;
  background-color: black;
  color: white;
}
.views {
  color: white;
}
.cart {
  text-align: left !important;
}
.px-6 {
     padding-left: none;
     padding-right: none;
}
.px-6 {
  padding-left: none;
  padding-right: none;
}
.py-4 {
padding-top: 0;
}

.photodiv {
  display: flex;
  color: white;
  gap: 10px;
  padding-top: 10px;
}
.photo {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.name {
  color: white;
  padding-right: 150px;
}
.menubar:hover {
  color: black;
  background-color: white;
}

.div1 {
  padding-left: 170px;
}
.title {
    color: white;
    text-align: right !important;
}
.menu {
  height: 1100px;
  width: 10px;
  position: fixed;
  color: white;
  top: 250px;
}
.myrouter {
  padding: 20px;
  color: white;
  font-size: larger;
  display: flex;
  flex-wrap: wrap;
}
.myrouter:hover {
  color: red;
}
.mtavari {
  padding-bottom: 50px;
  height: 20px;
}

</style>
