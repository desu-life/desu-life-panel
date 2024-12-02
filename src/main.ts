import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'animate.css'
import router from './router'
// 引入 Arco Design Vue 组件库
import ArcoVue from '@arco-design/web-vue';
// 引入 Arco 的样式文件
import '@arco-design/web-vue/dist/arco.css';
import { generate, getRgbStr } from "@arco-design/color";
import i18n from "@/locale";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue);
app.use(i18n)
app.mount('#app')

// 切换Arco Design主题色
const list = generate("#63e2b7", {
  list: true,
}).map((x: string) => getRgbStr(x));
list.map((x: string | null, i: number) => {
  document.body.style.setProperty("--primary-" + (i + 1), x);
});
