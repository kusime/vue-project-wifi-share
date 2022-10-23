import { createRouter, createWebHistory } from "vue-router";
import ExampleComponent from "@/components/example/ExampleComponent.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ExampleComponent,
    },
  ],
});

export default router;
