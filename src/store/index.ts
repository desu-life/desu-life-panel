import { createPinia } from 'pinia'
import useUserStore from '@/store/modules/user/userinfo'
import useAppStore from '@/store/modules/app'
import useTabBarStore from '@/store/modules/tab-bar'

const pinia = createPinia()

export { useAppStore, useUserStore,useTabBarStore}
export default pinia
