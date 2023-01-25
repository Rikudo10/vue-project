<script>
import Listmenu from "./List.vue"

export default{
  components: {
    Listmenu
  },
  data(){
    return {
      dataItem: [
                {
                  id: 1,
                  name:"HOME",
                  url:"https://www.google.com/",
                  description: "Home-Pages"
                },
                {
                  id: 2,
                  name:"CONTACT",
                  url:"https://www.bing.com/?toWww=1&redig=8B85287D87334880A26C4E35E8CE5234",
                  description: "CONTACT-PAGE"
                },
                {
                  id: 3,
                  name:"ABOUT US",
                  url:"https://yandex.com/",
                  description: "ABOUT-PAGE"
                },
                {
                  id: 4,
                  name:"INFO",
                  url:"https://duckduckgo.com/",
                  description: "INFO-PAGE"
                },
              ]
    }
  }
}
</script>

<template>
  <Listmenu :items="dataItem"></Listmenu>
</template>
