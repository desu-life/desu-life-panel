<script setup lang="ts">

import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import { useUserStore } from '@/stores/userinfo'

const router = useRouter()
const message = useMessage()


// 获取URL内的参数
const query = new URLSearchParams(location.search)
const code = query.get('code')
// 如果code存在，则提交到后端然后登录
if (code) {
  const userStore = useUserStore()
  userStore.loginByOsu(code).then((result) => {
    if (result.success) {
      message.success(result.message)
      router.push('/index')
    } else {
      message.error(result.message)
      router.push('/login')
    }
  })


}


</script>

<template>

  <div>认证中……</div>

</template>

<style scoped lang="scss">

</style>