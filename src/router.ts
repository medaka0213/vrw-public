import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: ()=> import("@/components/05_Pages/HomePage.vue")
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("@/components/05_Pages/AboutUsPage.vue")
    },
    {
        path: '/mission',
        name: 'MissionList',
        component: () => import("@/components/05_Pages/MissionListPage.vue")
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
        path: '/meetup',
        name: 'Meeutp',
        component: () => import("@/components/05_Pages/MeetupListPage.vue")
    },
    {
        path: '/q/meetup/i/:pk',
        name: 'MeeutpDetail',
        component: () => import("@/components/05_Pages/MeetupDetailPage.vue")
    },
    {
        path: '/q/:type/i/:pk',
        name: 'MissionDetail',
        component: () => import("@/components/05_Pages/MissionDetailPage.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router