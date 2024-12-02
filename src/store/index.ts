import { createPinia } from 'pinia'
import useUserStore from '@/store/modules/user/userinfo'
import useAppStore from '@/store/modules/app'
const pinia = createPinia()

export { useAppStore, useUserStore }
export default pinia
