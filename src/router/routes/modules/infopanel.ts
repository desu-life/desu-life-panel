// InfoPanel模块的定义，用于菜单渲染和路由
const INFOPANEL: AppRouteRecordRaw = {
  path: '/infopanel',
  name: 'infopanel',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.infopanel',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'list',
      name: 'List',
      component: () => import('@/views/infopanel/list/index.vue'),
      meta: {
        locale: 'menu.infopanel.list',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    /** simple */
    {
      path: 'editor',
      name: 'Editor',
      component: () => import('@/views/infopanel/editor/index.vue'),
      meta: {
        locale: 'menu.infopanel.editor',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    /** simple end */
  ],
}

export default INFOPANEL
