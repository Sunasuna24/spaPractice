import VueRouter from "vue-router";
import Home from "./components/Home";
import Register from "./components/auth/Register";

const routes = [
    {
        path: "/home",
        component: Home,
        name: "home"
    },
    {
        path: "/register",
        component: Register,
        name: "register"
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;