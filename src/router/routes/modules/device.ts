import { DEFAULT_LAYOUT } from '../base'
import type {AppRouteRecordRaw} from "@/router/routes/types";
// 设备模块的定义，用于菜单渲染和路由
const DEVICE: AppRouteRecordRaw = {
  path: '/profile',
  name: 'profile',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.profile',
    requiresAuth: true,
    icon: 'icon-file',
    order: 1,
  },
  children: [
    {
      path: 'list',
      name: 'List',
      component: () => import('@/views/device/list/index.vue'),
      meta: {
        locale: 'menu.device.list',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default DEVICE
