import { createRouter, createWebHistory } from "vue-router";
import History from "../views/History.vue";

const routes = [
  {
    path: "/",
    name: "History",
    component: History,
  },
  {
    path: "/ReportOfficer.vue",
    name: "ReportOfficer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReportOfficer.vue"),
  },
  {
    path: "/ReportUnitSetup.vue",
    name: "ReportUnitSetup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReportUnitSetup.vue"),
  },
  // {
  //   path: "/History.vue",
  //   name: "History",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/History.vue"),
  // },
  {
    path: "/Notification.vue",
    name: "Notification",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Notification.vue"),
  },
  {
    path: "/Setup.vue",
    name: "Setup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Setup.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
