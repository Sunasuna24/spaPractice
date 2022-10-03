import VueRouter from "vue-router";
import Home from "./components/Home";

const routes = [
    {
        path: "/home",
        component: Home,
        name: "home"
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;