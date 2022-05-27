import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: ()=> import("@/components/05_Pages/HomePage.vue")
    },
    {
        path: '/event',
        name: 'EventList',
        component: () => import("@/components/05_Pages/EventListPage.vue")
    },
    {
        path: '/launch',
        name: 'LaunchList',
        component: () => import("@/components/05_Pages/LaunchListPage.vue")
    },
    {
        path: '/q/:type/i/:pk',
        name: 'EventDetail',
        component: () => import("@/components/05_Pages/ItemDetailPage.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router