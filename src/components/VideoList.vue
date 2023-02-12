<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const filteredPost = computed(() => store.getters.filteredPost)
const search = ""
const ChangeSearch = (e) => store.commit('ChangeSearch', e.target.value)



const store = useStore()

</script>
<template>
    <div class="w-full">
        <ul class="w-80 space-y-2">
            <input type="text" v-model="search" @input="ChangeSearch" class="border-4 border-indigo-500/100">
            <li v-for="item in filteredPost" :key="item.index" class="flex flex-row justify-between items-center">
                <span>{{ item.name }} <a :href="item.url"><img :src="item.cover"></a> {{ item.description }}</span>
                <button 
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    @click.prevent="store.dispatch('addItemToCartAction', item.id)"
                >Save</button>
                <router-link :to="{ name: 'info', params: { id: item.id}}" >
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Info </button>
                </router-link>
            </li>
        </ul>
    </div>
</template>
