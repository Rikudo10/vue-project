<script>
export default {
    data(){
        return {
            ItemName: null
        }
    },
    methods: {
        submitform(){
            this.$emit('onSubmit', this.ItemName)
            this.ItemName = null
        },
    }
}
</script>

<template>
    <form @submit.prevent="submitform">
    <input v-model="ItemName" />
    <button class="button1" type="submit">Add New Todo item</button>
    </form>
</template>
<style>
.button1 {
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.9rem 2rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 10px;
    border-radius: 350px;
    overflow: hidden;
    background: #66ff66;
    color: rgb(7, 7, 7);
   }
</style>
