<script>
import Listitemcomponent from './Listitemcomponent.vue';
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
        deleteRecord(data){
            this.$emit('onDelete', item)
        }
    }

}
</script>
<template>
      <ul>
            <Listitemcomponent 
            v-for="item in data"
             :key="item.index" :itemData="item"
               :renderCheckbox="changeStatus" 
               :renderDeleteButton="candelete"
               @onChange="changeDoneStatus($event)"
               @onDelete="deleteRecord($event)"/>
      </ul>
</template>