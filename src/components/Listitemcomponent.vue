<script>
export default {
    props: {
        itemData: { type:Object, required:true },
        renderCheckbox: { type:Boolean, required:true},
        
    },
    methods: {
        onChange(){
            this.$emit('onChange', this.itemData)
        },
    },
}
</script>
<template>
    <li>
        <input v-if="renderCheckbox" type="checkbox" :checked="itemData.done" @change="onChange"> 
        <label>{{ itemData.id }} - {{ itemData.name }}</label> 
    </li>
   
</template>