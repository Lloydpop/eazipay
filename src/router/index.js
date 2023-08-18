import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DashBoard from "../views/DashboardPage.vue";
const routes = [
  { path: "/", component: HomePage },
  { path: "/dashboard", component: DashBoard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
