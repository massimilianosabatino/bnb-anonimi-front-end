import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
  ],
});

export { router };
