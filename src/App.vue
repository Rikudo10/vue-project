<script setup>
import VideoList from './components/VideoList.vue'
import watched from './components/watched.vue'
import video from './components/video.vue'


const menu = [
  { routeName: 'MTAVARI', title: 'Main Page'},
  { routeName: 'About', title: 'About Us'},
  { routeName: 'Contact', title: 'Contac Us'}
]

</script>

<template>
   <div class="flex flex-row space-x-4">
      <RouterLink v-for="item in menu" :key="item.index" :to="{ name: item.routeName }">{{ item.title }}</RouterLink>
    </div>
    <div>
      <RouterView />
    </div>
  <div class="container mx-auto text-center">
    
    <div class="flex flex-row space-x-4">
      <VideoList />
      <watched />
      <video />
    </div>
  </div>
</template>

<styles>

</styles>