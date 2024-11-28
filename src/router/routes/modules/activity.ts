import { DEFAULT_LAYOUT } from '../base'
import { AppRouteRecordRaw } from '../types'
// 活动模块的定义，用于菜单渲染和路由
const ACTIVITY: AppRouteRecordRaw = {
  path: '/activity',
  name: 'activity',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.activity',
    requiresAuth: true,
    icon: 'icon-file',
    order: 2,
  },
  children: [
    {
      path: 'my',
      name: 'My',
      component: () => import('@/views/activity/my/index.vue'),
      meta: {
        locale: 'menu.activity.my',
        requiresAuth: true,
        roles: ['*'],
      },
    },{
      path: 'manage',
      name: 'Manage',
      component: () => import('@/views/activity/manage/index.vue'),
      meta: {
        locale: 'menu.activity.manage',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default ACTIVITY
