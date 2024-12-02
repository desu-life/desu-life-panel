import {createRouter, createWebHistory} from 'vue-router'

import {useUserStore} from '@/store/modules/user/userinfo'
import {appRoutes} from './routes'
import {NOT_FOUND_ROUTE, REDIRECT_MAIN} from './routes/base'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: 'user/accounts',
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/Login.vue'),
            meta: {
                requiresAuth: false,
            },
        },
        {
            name: 'LinkOsu',
            path: '/linkOsu',
            component: () => import('@/views/LinkOsu.vue'),
            meta: {
                title: '第三方登录'
            }
        },
        ...appRoutes,
        REDIRECT_MAIN,
        NOT_FOUND_ROUTE,
    ],
    scrollBehavior() {
        return {top: 0}
    },
})

router.beforeEach(async (to, from) => {
    const userStore = useUserStore()
    if (!userStore.isAuthenticated() && to.name !== 'login' && to.name !== 'LinkOsu') {
        return {name: 'login'}
    }
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title + ' - DESU.Life'
    } else {
        document.title = 'DESU.Life'
    }
    next()
})

export default router
