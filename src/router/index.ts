import { createRouter, createWebHistory } from 'vue-router'

import { useUserStore } from '@/stores/userinfo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: () => import('../views/Index.vue'),
      meta: {
        title: '用户中心'
      }
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('../views/Login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      name: 'Register',
      path: '/register',
      component: () => import('../views/Register.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/404.vue'),
      meta: {
        title: '404'
      }
    }
  ]
})

router.beforeEach(async (to, from) => {
  const userStore = useUserStore()
  if (!userStore.isAuthenicated() && to.name !== 'Login') {
    return { name: 'Login' }
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
