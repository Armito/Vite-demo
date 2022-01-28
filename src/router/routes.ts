import { RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage/index.vue'
import PlayPage from '@/pages//Play/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/play',
        component: PlayPage
    }
]

export default routes