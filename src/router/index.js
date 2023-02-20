import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import about from "@/views/about.vue";
import help from "@/views/help.vue";
import info from "@/views/info.vue"
import mix from "@/views/mix.vue"
import music from "@/views/music.vue"
import videogame from "@/views/videogame.vue"
import movie from "@/views/movie.vue"
import football from "@/views/football.vue"
import newvideo from "@/views/newvideo.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
  {
    path: "/help",
    name: "help",
    component: help,
  },
  {
    path: "/info/:id",
    name: "info",
    component: info,
  },
  {
    path: "/mix",
    name: "mix",
    component: mix,
  },
  {
    path: "/music",
    name: "music",
    component: music,
  },
  {
    path: "/videogame",
    name: "videogame",
    component: videogame,
  },
  {
    path: "/movie",
    name: "movie",
    component: movie,
  },
  {
    path: "/football",
    name: "football",
    component: football,
  },
  {
    path: "/newvideo",
    name: "newvideo",
    component: newvideo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;