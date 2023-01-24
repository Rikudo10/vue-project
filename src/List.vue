<template>

<div class="div1">
    <ul>
        <li v-for="item in menuList" :key="item.index" >{{item}}</li>
    </ul>
</div>


</template>

<script>

export default{
    data(){
        return{
            menuList: ['Home', 'Products', 'About Us', 'Contact']
        }
    },
}


</script>

<style scoped>

ul {
    display: flex;
    gap: 30px;
}
li {
 color: crimson;
 font-size: larger;
 border: 1px cyan;
 border-radius: 10%;
padding: 10px;
background-color: yellow;
}

</style>