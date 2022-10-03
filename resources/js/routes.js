import VueRouter from "vue-router";
import Top from "./components/Top";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";

const routes = [
    {
        path: "/",
        component: Top,
        name: "top"
    },
    {
        path: "/home",
        component: Home,
        name: "home"
    },
    {
        path: "/login",
        component: Login,
        name: "login"
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