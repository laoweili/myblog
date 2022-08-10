<template>
  <div
    id="backtop"
    v-if="$store.state.isLogin"
    style="background: white; padding: 10px 0 20px"
  >
    <!-- 基本信息 -->
    <el-descriptions
      class="margin-top"
      title="基本信息"
      :column="3"
      size="large"
      border
    >
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <user />
            </el-icon>
            名字
          </div>
        </template>
        劳委立
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <tickets />
            </el-icon>
            性别
          </div>
        </template>
        男
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <office-building />
            </el-icon>
            现居地
          </div>
        </template>
        福建福州
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <location />
            </el-icon>
            工作经验
          </div>
        </template>
        1年
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <iphone />
            </el-icon>
            电话
          </div>
        </template>
        13328383933
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <iphone />
            </el-icon>
            邮箱
          </div>
        </template>
        744619344@qq.com
      </el-descriptions-item>
    </el-descriptions>

    <!-- 教育背景 -->
    <el-descriptions
      class="margin-top"
      title="教育背景"
      :column="3"
      :size="size"
      :style="blockMargin"
    >
      <el-descriptions-item label="2018.9-2022.6" style="margin-left: 15px">
      </el-descriptions-item>
      <el-descriptions-item label="武夷学院"></el-descriptions-item>
      <el-descriptions-item label="通信工程（本科）"></el-descriptions-item>
    </el-descriptions>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>主修课程</span>
        </div>
      </template>
      <p>C语言、计算机网络、通信原理、单片机、TCP/IP网络编程，信号与系统</p>
    </el-card>

    <!-- 工作经历 -->
    <el-descriptions
      class="margin-top"
      title="工作经历"
      :column="3"
      :size="size"
      :style="blockMargin"
    >
      <el-descriptions-item label=" 2022.6-至今" style="margin-left: 15px">
        <span style="opacity: 0">1111111111111111d3qwq2322343211</span>
      </el-descriptions-item>
      <el-descriptions-item label="福建众智慧云"
        ><span style="opacity: 0"
          >1111114wqqret351341111111</span
        ></el-descriptions-item
      >
      <el-descriptions-item label="技术体系："
        >angularJs/vue+ts</el-descriptions-item
      >
    </el-descriptions>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>工作职责</span>
        </div>
      </template>
      <ul>
        <li>摸鱼</li>
        <li>睡觉</li>
        <li>打游戏</li>
        <li>看美女</li>
      </ul>
    </el-card>
    <!-- 项目经历 -->
    <el-descriptions
      class="margin-top"
      title="项目经历"
      :column="3"
      :size="size"
      :style="blockMargin"
    >
      <el-descriptions-item label="2022.5-2022.6" style="margin-left: 15px">
        <span style="opacity: 0">11111</span>
      </el-descriptions-item>
      <el-descriptions-item label="团队合作"
        ><span style="opacity: 0">111111111111</span></el-descriptions-item
      >
      <el-descriptions-item label="项目组长"></el-descriptions-item>
    </el-descriptions>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>主要内容:</span>
          <span>项目名称：跑步app</span>
          <span>技术架构：mui/node/mongodb</span>
        </div>
      </template>
      <ul>
        <li>
          <strong>项目描述：</strong>
          <p>
            这是一个移动端app,该应用可以记录用户户外运动，发动态，促进运动爱好者的交流。
          </p>
        </li>
        <li>
          <strong>项目核心：</strong>
          <p>
            基于node.js实现前后端数据的交互。该项目通过模块化开发思想提高了开发效率。主要实现了以下功能：1登录注册.2用户头像上传.3用户更新生活动态.4用户点赞收藏.5用户发起群聊并实时更新聊天内容.6用户购物，对商品数量进行增删改查处理(数据库同步更新).7.页面的上拉加载和下拉刷新。
          </p>
        </li>
      </ul>
    </el-card>
    <el-descriptions
      class="margin-top"
      :column="3"
      :size="size"
      :style="blockMargin"
    >
      <el-descriptions-item label="2022.3-2022.4" style="margin-left: 15px">
        <span style="opacity: 0">11111</span>
      </el-descriptions-item>
      <el-descriptions-item label="个人开发"
        ><span style="opacity: 0">111111111111</span></el-descriptions-item
      >
      <el-descriptions-item label="独立开发"></el-descriptions-item>
    </el-descriptions>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>主要内容:</span>
          <span
            ><span style="opacity: 0">111111111111</span
            >项目名称：图书管理系统</span
          >
          <span>技术架构：bootsrap/node.js/mongodb</span>
        </div>
      </template>
      <ul>
        <li>
          <strong>项目描述：</strong>
          <p>
            这是一个后台管理系统，管理员可以管理图书数据（数量/价格/封面/库存），进行数据库的增删改查。
          </p>
        </li>
        <li>
          <strong>项目核心：</strong>
          <p>
            基于bootsrap工具库，实现一个响应式布局的前端页面，再通过node.js的模块化思想把功能按模块来划分，利用ajax向后端接口发送请求并响应到对应的功能模块上，实现用户的登录注册功能。
          </p>
        </li>
      </ul>
    </el-card>
    <!-- 专业技能 -->
    <div class="el-descriptions__header margin-top">
      <div class="el-descriptions__title">专业技能</div>
      <div class="el-descriptions__extra"></div>
    </div>
    <el-card class="box-card">
      <ol class="">
        <li>
          熟悉H5及语义化，能实现各种动效，能够解决浏览器兼容性问题。会使用Canvas和SVG进行简单
          绘图，熟练DIV+CSS页面布局，弹性布局，熟悉css3动画原理。
        </li>
        <li>
          能够使用原生JavaScript开发Web 应用。了解 Mui、Bootstrap，Swiper
          等框架，熟练使用 Less和Sass 等预编译器；
        </li>
        <li>
          熟悉模块化编程、熟悉 CMD、AMD 规范、ES6
          语法；用ES6中的Promise对象和Deferred对象对异步执行进行优化，了解worker多线程编程。
        </li>
        <li>
          熟悉如何进行服务端的模块化，熟练使用mongoose模块进行对mongodb的增删改查操作，会使用mongoose操作多个集合间的复杂关系；
        </li>
        <li>
          熟悉掌握代码管理工具
          git。以及webpack配置，会了解grunt,gulp，可以对多个js文件或者css文件进行合并和压缩，以及代码检查，文件监视等功能；
        </li>
        <li>
          熟悉HTTP协议，了解常见HTTP状态码，能使用谷歌、火狐工具进行调试，熟悉使用GET请求和POST请求的区别，AJAX请求机制；
        </li>
        <li>
          掌握 MVVM 和 MVC设计模式，掌握Vue.js 框架，有完整的移动、PC
          商城的开发经验；
        </li>
      </ol>
    </el-card>
    <!-- 自我评价 -->
    <div class="el-descriptions__header margin-top">
      <div class="el-descriptions__title">自我评价</div>
      <div class="el-descriptions__extra"></div>
    </div>
    <el-card class="box-card">
      <ol>
        <li>性格沉稳，对工作认真负责，纪律性和适应性强。</li>
        <li>自学能力强，刻苦努力，不断提升自己，有良好的编程习惯。</li>
        <li>
          同时善于观察周围的事物，善于收集资料分析问题，并能快速解决问题。
        </li>
      </ol>
    </el-card>
    <Backtop/>
  </div>
  <div v-else>无权限查看，查看前请先登录管理员账号！</div>
</template>

<script setup>
import Backtop from "@/components/Backtop.vue"
import { computed, ref } from "vue";
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from "@element-plus/icons-vue";

const size = ref("");
const iconStyle = computed(() => {
  const marginMap = {
    large: "8px",
    default: "6px",
    small: "4px",
  };
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  };
});
const blockMargin = computed(() => {
  const marginMap = {
    large: "32px",
    default: "28px",
    small: "24px",
  };
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  };
});
</script>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin: 20px auto 0;
  width: 80%;
}
.el-card {
  text-align: start;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px !important;
}

.item {
  margin-bottom: 18px;
}
.el-descriptions__content {
  display: none;
}
.box-card {
  width: 80%;
  font-size: 12px !important;
  margin: auto;
}
.el-card.is-always-shadow {
  box-shadow: none;
}
ol li,
ul li {
  line-height: 30px;
}
.el-descriptions__title {
  margin: 10px 0 20px;
}
</style>
