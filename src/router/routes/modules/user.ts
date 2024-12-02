import { DEFAULT_LAYOUT } from '../base'
import type {AppRouteRecordRaw} from "@/router/routes/types";

// 用户模块的定义，用于菜单渲染和路由
const USER: AppRouteRecordRaw = {
  path: '/user',
  name: 'user',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.user',
    requiresAuth: true,
    icon: 'icon-file',
    order: 3,
  },
  children: [
    {
      path: 'accounts',
      name: 'accounts',
      component: () => import('@/views/user/accounts/index.vue'),
      meta: {
        locale: 'menu.user.accounts',
        requiresAuth: true,
        roles: ['*'],
      },
    }
  ],
}

export default USER
