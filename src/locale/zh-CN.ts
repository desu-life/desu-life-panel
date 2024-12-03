import localeMessageBox from '@/components/message-box/locale/zh-CN'
import localeLogin from '@/views/login/locale/zh-CN'

import localeSettings from './zh-CN/settings'


import localeInfoPanelEditor from '@/views/infopanel/editor/locale/zh-CN'
import localeInfoPanelList from '@/views/infopanel/list/locale/zh-CN'
import localeDeviceList from '@/views/device/list/locale/zh-CN'
import localeActivityManage from '@/views/activity/manage/locale/zh-CN'
import localeActivityMy from '@/views/activity/my/locale/zh-CN'


import localeUserAccounts from '@/views/user/accounts/locale/zh-CN'

export default {
  // 在此定义一级菜单的国际化配置
  'menu.activity': '赛事/活动管理',
  'menu.user': '个人中心',
  'menu.device': '设备管理',
  'menu.infopanel': 'InfoPanel',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeInfoPanelEditor,
  ...localeInfoPanelList,
  ...localeDeviceList,
  ...localeActivityManage,
  ...localeActivityMy,

  ...localeUserAccounts,
}
