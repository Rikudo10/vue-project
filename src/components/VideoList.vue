<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const filteredPost = computed(() => store.getters.filteredPost)


const menu1 = [
  { routeName: 'music', title: 'მუსიკა'},
  { routeName: 'videogame', title: 'ვიდეო-თამაშები'},
  { routeName: 'mix', title: 'მიქსი'},
  { routeName: 'movie', title: 'ფილმები'},
  { routeName: 'football', title: 'ფეხბურთი'},
  { routeName: 'newvideo', title: 'ახალი-ვიდეოები'},
]

const store = useStore()

</script>
<template>
    <div class="mtavari w-full">
      <div class="BarMenu">
        <RouterLink v-for="itemm in menu1" :key="itemm.index" :to="{ name: itemm.routeName }" class="menubar  block mt-4 lg:inline-block text-teal-200 hover:text-white mr-4">{{ itemm.title }}
      </RouterLink>
      </div>
      <div class="menu ">
       
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
.myul {
  padding-top: 30px;
}
.menubar {
  margin-left: 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 7px;
  padding-bottom: 7px;
  color: white;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.264);
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
.BarMenu {
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 30px;
  background-color: black;
  position: fixed;
}
.mtavari {
  padding-bottom: 50px;
  height: 20px;
}

</style>
