<template>

<div class="div1">
    <ul>
            <li v-for="item in aLink" :key="item.id">  <a :href="item.url"> {{ item.title }} </a> </li>
    </ul>
</div>


</template>

<script>

export default{
    data(){
        return{
            aLink: [
            {
                id: 1,
                title: 'home',
                url: "www.youtube.com"
                },
                {
                id: 2,
                title: 'contact',
                url: "www.youtube.com"
                },
                {
                id: 1,
                title: 'abous us',
                url: "www.youtube.com"
                },
                {
                id: 1,
                title: 'Exit',
                url: "www.youtube.com"
                },
                
            ]
        }
    },
}


</script>

<style scoped>

div {
    border: blueviolet 1px solid;
    background-color: blueviolet;
}

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
 list-style: none;
}
li:hover{
    color: cyan;
}

</style>