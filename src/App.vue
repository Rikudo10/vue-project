<script setup>
import VideoList from './components/VideoList.vue'
import watched from './components/watched.vue'
import video from './components/video.vue'


</script>

<template>
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