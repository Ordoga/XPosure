import Home from "../pages/Home.vue"
import Portfolio from "../pages/Portfolio.vue"
import AlbumView from "../pages/AlbumView.vue"

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
        {
            path: "/portfolio/:id/:albumId",
            name: "AlbumView",
            component: AlbumView,
        },
    ],
})

export default router
