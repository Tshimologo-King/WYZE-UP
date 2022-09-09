import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/Careers.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import adminDashboard from "../views/adminDashboard.vue";
import singleCareer from "../views/singleCareer";
import singleCareerComp from "../components/singleCareerComp";
import singleUsers from "../components/singleUsers";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Careers",
    name: "careers",
    component: () => import("../views/Careers.vue"),
  },
  {
    path: "/singleCareerComp",
    name: "singleCareerComp",
    component: () => import("../components/singleCareerComp.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../components/Register.vue"),
  },
  {
    path: "/adminDashboard",
    name: "adminDashboard",
    component: () => import("../views/adminDashboard.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/Users.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../components/singleUsers.vue"),
  },
  {
    path: "/singleCareer/:id",
    name: "singleCareer",
    component: () => import("../views/singleCareer.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
