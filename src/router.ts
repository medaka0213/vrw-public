import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: ()=> import("@/components/05_Pages/HomePage.vue")
    },
    {
        path: '/events',
        name: 'Index',
        component: () => import("@/components/05_Pages/EventListPage.vue")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router