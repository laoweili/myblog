import { createRouter, createWebHashHistory } from 'vue-router'
// 侧栏组件
// 1.主页
import Home from "@/views/home/index.vue"
// 2.归档
import FrontEndFoundation from "@/views/archive/FrontEndFoundation.vue"
import FrontEndAdvanced from "@/views/archive/FrontEndAdvanced.vue"
import Documentation from "@/views/archive/Documentation.vue"
// 3.分类
import Admin from "@/views/classify/Admin.vue"
import TechnicalDiscussion from "@/views/classify/TechnicalDiscussion.vue"
// 4.标签
// 5.歌单
import MusicMenu from "@/views/music/MusicMenu.vue"
// 6.关于
import More from "@/views/about/More.vue"
import Resume from "@/views/about/Resume.vue"
import Project from "@/views/about/Project.vue"
// 路由配置
const routes = [
    // 重定向
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/foundation',component:FrontEndFoundation},
    {path:'/advanced',component:FrontEndAdvanced},
    {path:'/documentation',component:Documentation},
    {path:'/admin',component:Admin},
    {path:'/technicaldiscussion',component:TechnicalDiscussion},
    {path:'/musicmenu',component:MusicMenu},
    {path:'/more',component:More},
    {path: '/resume', component: Resume },
    {path: '/project', component: Project },
  ]

  const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })
export default router