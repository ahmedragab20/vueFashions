import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Fashions from "../views/Fashions.vue";
import Models from "../views/Models.vue";
import News from "../views/News.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Fashions",
    name: "Fashions",
    component: Fashions,
  },
  {
    path: "/Models",
    name: "Models",
    component: Models,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
