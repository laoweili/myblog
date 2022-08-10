import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import router from './router'
import "./mock/index.js"
import "@/assets/mousemove.js"
// 图标
import "./assets/icons/iconfont.css"
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus,{locale: zhCn})
app.use(store)
app.use(router)
app.mount('#app')
