import { ref } from 'vue'
import { defineStore } from 'pinia'
import service from '@/api'
import type { UserInfo } from '@/models/UserInfo'



export const useUserStore
  = defineStore('user', () => {
  const userinfo = ref<UserInfo | null>(null)
  const accessToken = ref<string | null>(localStorage.getItem('auth_token'))
  const refreshToken = ref<string | null>(localStorage.getItem('refresh_token'))

  async function loginByOsu(code: string): Promise<{ success: boolean; message: string }> {

    try {
      const response = await service.post('/ThirdPartyOAuth2/LinkOsu?code=' + code)

      if (response.data.data.access_token) {
        accessToken.value = response.data.data.access_token
        refreshToken.value = response.data.data.refresh_token

        // 请求Me接口，获取用户信息
        const userInfoResponse = await service.get('/User/Me', {
          headers: { Authorization: `Bearer ${accessToken.value}` }
        })
        userinfo.value = userInfoResponse.data.data


        // 保存到 localStorage
        localStorage.setItem('user_info', JSON.stringify(userinfo.value))
        if (accessToken.value) {
          localStorage.setItem('access_token', accessToken.value)
        }
        if (refreshToken.value) {
          localStorage.setItem('refresh_token', refreshToken.value)
        }
        return { success: true, message: '登录成功！' }
      } else {
        console.error('login by osu failed, no access token:', response.data)
        return { success: false, message: '登录失败，未获取到访问令牌！' }
      }
    } catch (error) {
      console.error('login by osu failed:', error)
      return { success: false, message: '认证失败！' }
    }
  }

  // 使用用户名和密码登录
  async function login(username: string, password: string): Promise<{ success: boolean; message: string }> {
    try {
      const response = await service.post('/login', { username, password })
      if (response.data.data.access_token) {
        accessToken.value = response.data.data.access_token
        refreshToken.value = response.data.data.refresh_token

        // 请求 Me 接口，获取用户信息
        const userInfoResponse = await service.get('/User/Me', {
          headers: { Authorization: `Bearer ${accessToken.value}` }
        })
        userinfo.value = userInfoResponse.data.data

        // 保存到 localStorage
        localStorage.setItem('user_info', JSON.stringify(userinfo.value))
        if (accessToken.value) {
          localStorage.setItem('auth_token', accessToken.value)
        }
        if (refreshToken.value) {
          localStorage.setItem('refresh_token', refreshToken.value)
        }

        // 返回登录成功状态
        return { success: true, message: '登录成功！' }
      } else {
        console.error('login by pwd failed, no access token:', response.data)
        return { success: false, message: '登录失败，未获取到访问令牌！' }
      }
    } catch (error) {
      console.error('login by pwd failed:', error)
      return { success: false, message: '登录失败！' }
    }
  }

  function isAuthenticated() {
    return !!userinfo.value?.name && !!accessToken.value
  }

  function logout() {
    userinfo.value = {}
    accessToken.value = null
    refreshToken.value = null
    localStorage.removeItem('user_info')
    localStorage.removeItem('auth_token')
    localStorage.removeItem('refresh_token')
  }

  return { userinfo, accessToken, refreshToken, login, loginByOsu, isAuthenticated, logout }

})
