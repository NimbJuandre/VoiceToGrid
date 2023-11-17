import { createRouter, createWebHistory } from "vue-router";
import VHome from "@src/views/VHome.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: VHome
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;