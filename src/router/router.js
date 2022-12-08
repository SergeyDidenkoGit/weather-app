import Main from "@/pages/Main.vue";
import Favorites from "@/pages/Favorites.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/weather-app/",
    component: Main,
  },
  {
    path: "/weather-app/favorites",
    component: Favorites,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
