import { createRouter, createWebHistory } from "vue-router";

import CodeGallery from "@/views/CodeGallery.vue";
import AdderPage from "@/views/AdderPage.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/gallery",
    },
    {
      path: "/gallery",
      name: "gallery",
      component: CodeGallery,
      meta: { transition: "slide-left" },
    },
    {
      path: "/adder",
      name: "adder",
      component: AdderPage,
      meta: { transition: "slide-right" },
    },
    {
      // https://thewebdev.info/2020/08/19/vue-router-4-404-and-nested-routes/
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
});

export default router;
