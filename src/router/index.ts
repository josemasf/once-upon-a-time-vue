import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bookstore",
      name: "bookstore",

      component: () => import("../views/BookstoreView.vue"),
    },
    {
      path: "/bookstore/:id",
      name: "bookstore-detail",
      component: () => import("../views/BookstoreDetailView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
