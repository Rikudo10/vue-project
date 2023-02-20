<script setup>
import { useStore } from 'vuex'

const store = useStore()


const search = ""
const ChangeSearch = (e) => store.commit('ChangeSearch', e.target.value)



</script>

<template>
 <div class="mtavari"> 
<nav class="myclass1 flex items-center justify-between flex-wrap bg-neutral-900	 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6 mydiv">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="50" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>

    <span class="font-semibold text-xl tracking-tight youtube"><a href="#">Youtube</a></span></svg>

    <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#">
        <svg class="icons" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
</svg>
        მთავარი</a></li>
      <li><a class="menu__item" href="#">
        <svg class="icons" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"></path>
</svg>
        Shorts</a></li>
      <li><a class="menu__item" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="icons1" viewBox="0 0 16 16">
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
        <span class="span1">გამოწერები</span></a></li>
    </ul>
  </div>
    
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mydiv2">
    <div class="text-sm lg:flex-grow">
      <input  type="text" placeholder="ძიება" v-model="search" @input="ChangeSearch" class=" mysearch">
    </div>
  </div>
</nav>
</div>
</template>

<style scoped>
.span1 {
  font-size: 18px;
  padding-left: 20px;
}

.icons1 {
  color: white;
  width: 27px;
  transform: translate(-11px, 30px);
}
.icons {
  color: white;
  width: 27px;
  transform: translate(-10px, 26px);
}
.mydiv2 {
  padding-right: 220px;
}
.mysearch {
  width: 495px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  color: white;
  background-color: black;
  border: 1px solid white;
  padding-left: 20px;
}
.bi{
  color: red;
  width: 35px;
}
.youtube {
  height: 30px;
  width: 70px;
  font-size: 30px;
}
.mydiv {
  padding-left: 70px;
  z-index: 5;
}
.myclass1 {
  position: fixed;
  width: 100%;
}
.mtavari {
  padding-bottom: 90px;
}
#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  position: fixed;
  transform: translate(10px, 10px);
  left: 30px;
  width: 26px;
  height: 26px;
  cursor: pointer;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  top: 100px;
  left: -100%;
  width: 160px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: black;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
  z-index: 1000 !important;
}
.menu__item {
  display: block;
  padding: 12px 24px;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}
.menu__item:hover {
  background-color: #3f40409d;
  border-radius: 20px;
}
</style>