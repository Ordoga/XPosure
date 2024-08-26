import Home from "../pages/Home.vue"
import Portfolio from "../pages/Portfolio.vue"

import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/portfolio/:id",
            name: "Portfolio",
            component: Portfolio,
        },
    ],
})

export default router
