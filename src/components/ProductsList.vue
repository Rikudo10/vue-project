<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const data = computed(() => store.getters.productsList)

</script>
<template>
    <div class="w-full">
        <h2 class="text-2xl font-bold">Available Products</h2>
        <ul class="w-60 space-y-2">
            <li v-for="item in data" :key="item.index" class="flex flex-row justify-between items-center">
                <span>{{ item.name }} - {{ item.price }}</span>
                <button 
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    @click.prevent="store.dispatch('addItemToCartAction', item.id)"
                >Add To Cart</button>
            </li>
        </ul>
    </div>
</template>