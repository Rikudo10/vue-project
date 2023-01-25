<script>
export default{
    props:{items: Array,},
    data(){
        return {
            isHidden : true,
        }
    }
}
</script>

<template>
    <div class="nav">
        <ul>
            <li v-for="item in items" :key="item.id" >
                <button @click="isHidden = !isHidden">{{item.name}}</button>

            </li>
        </ul>
    </div>
    
    <div id="app">
  
  <p v-if="!isHidden" v-for="item in items" :key="item.index">{{item.description}}</p>
  
    </div>
</template>

<style scoped>
.nav{
    background-color: cyan;
    color: midnightblue;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0.5rem 1rem;
}

.nav ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
}

.nav li{
    padding: 0.5rem;
    border-radius: 20px;
    font-weight: 450;
    font-size: 25px;
    transition: all 0.35s;
}

.nav a{
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0.25rem;
}
</style>