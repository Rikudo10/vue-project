<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex'

const store = useStore()


onMounted(() => {
    let firstProduct = store.state.products[0]
    console.log(firstProduct)
})

</script>
<template>

</template>