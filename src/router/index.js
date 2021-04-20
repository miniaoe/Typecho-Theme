import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

const Home = () => import("../views/Home.vue");
const Essay = () => import("../views/Essay.vue");

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/essay/:id",
    component: Essay,
  },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
