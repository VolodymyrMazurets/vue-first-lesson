import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "users" */ "@/views/Users.vue"),
    children: [
      {
        path: "details/:id",
        name: "UsersDetails",
        component: () =>
          import(/* webpackChunkName: "users" */ "@/views/Users.vue"),
      },
    ],
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: () =>
      import(/* webpackChunkName: "buttons" */ "@/views/Buttons.vue"),
  },
  {
    path: "/json-placeholder",
    name: "JsonPlaceholder",
    component: () =>
      import(/* webpackChunkName: "buttons" */ "@/views/JsonPlaceholder.vue"),
    children: [
      {
        path: "details/:id",
        name: "PostDetails",
        component: () =>
          import(/* webpackChunkName: "postDetails" */ "../views/PostDetails.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
