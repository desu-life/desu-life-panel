import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userinfo = ref<{ username?: string }>({})
  // const doubleCount = computed(() => count.value * 2)
  function testLogin() {
    userinfo.value = {
      username: 'admin'
    }
  }
  function isAuthenicated() {
    return !!userinfo.value.username
  }

  return { userinfo, testLogin, isAuthenicated }
})
