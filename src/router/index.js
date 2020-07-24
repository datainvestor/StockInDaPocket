import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import Results from "../views/Results.vue";
import MainLayout from "../layouts/MainLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "default",
    redirect: '/home',
    component: MainLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Search
      },
      {
        path: "/abt",
        name: "abt",
        component: Results
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
