<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const data = computed(() => store.getters.cartList)

</script>
<template>
    <div class="w-full">
        <h2 class="text-2xl font-bold">WatchList</h2>
        <ul class="w-80 space-y-2">
            <li v-for="item in data" :key="item.index" class="flex flex-row justify-between items-center">
                <span>{{ item.name }} - <a :href="item.url"><img :src="item.cover"></a> {{ item.description }}</span>
                <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded whitespace-nowrap"
                @click.prevent="store.commit('removeItemFromCart', item.id)"
                >Remove</button>
            </li>
        </ul>
    </div>
</template>