import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import ContactPage from "./pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path:"/search",
      name: 'Search',
      component: SearchPage,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage,
    },
  ],
});

export { router };
