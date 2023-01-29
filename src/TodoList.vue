<script>
import Listitemcomponent from './components/Listitemcomponent.vue';
export default {
    props: { 
        data: { type:Array, required:true },
        changeStatus: { type:Boolean, required: false, default:false},
        candelete: {type:Boolean, required: false, default:false}
    },
    components: {
        Listitemcomponent
    },
    methods: {
        changeDoneStatus(item){
            this.$emit('onChangeDoneStatus', item)

        },
    }

}
</script>
<template>
      <ul>
            <Listitemcomponent 
            v-for="item in data"
             :key="item.index" :itemData="item"
               :renderCheckbox="changeStatus" 
               @onChange="changeDoneStatus($event)"
                />
      </ul>
</template>