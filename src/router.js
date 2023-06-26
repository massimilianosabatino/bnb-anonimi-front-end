import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import DetailsPage from "./pages/DetailsPage.vue";
import AboutUs from "./pages/AboutUs.vue";
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
    {
      path: '/apartment',
      name:'Details',
      component:DetailsPage
    },
    {
      path:'/about',
      name:'AboutUs',
      component:AboutUs
    }

  ],
});

export { router };
