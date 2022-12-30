import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/m",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
    meta: {
      title: "首页",
      // isHeader: true, // 是否需要nav头部， 默认 true
      // isTab: true, // 是否需要tab栏， 默认 true
    },
  },
  {
    path: "/m/live",
    name: "Live",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "live" */ "../views/live/index.vue"),
  },
  {
    path: "/m/game",
    name: "Game",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/game/index.vue"),
  },
  {
    path: "/m/mine",
    name: "Mine",
    component: () =>
      import(/* webpackChunkName: "mine" */ "../views/mine/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  if (to.meta.keepAlive) {
    store.commit("app/SET_KEEPALIVE", to.name);
  }
  next();
});
export default router;
