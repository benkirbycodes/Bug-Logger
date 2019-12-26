import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Bug from "../views/Bug.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/bugs/:id",
    name: "bug",
    component: Bug
  }
];

const router = new VueRouter({
  routes
});

export default router;
