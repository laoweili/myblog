<template>
  <el-aside width="250px">
    <el-scrollbar>
      <!-- 用户信息 -->
      <Usermsg></Usermsg>
      <el-menu :default-openeds="['1']">
        <el-menu-item index="1">
          <router-link to="/home"
            ><el-icon><House /></el-icon>主页</router-link>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Folder /></el-icon>归档
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link to="/foundation">
                <i class="iconfont icon-jichu"></i>前端基础</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/advanced">
                <i class="iconfont icon-lujing"></i>前端进阶</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="/documentation">
                 <i class="iconfont icon-wendang"></i>相关文档</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Management /></el-icon>分类
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <router-link to="/admin">
                 <i class="iconfont icon-houtaiguanli-quanxianguanli"></i>
                 后台管理 </router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to="/technicaldiscussion">
                 <i class="iconfont icon-codepen"></i>
                 技术探讨 </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><PriceTag /></el-icon>标签
          </template>
          <el-menu-item-group>
             <el-menu-item index="4-1">
              <el-tag class="ml-2" @click="tips">html</el-tag>
              <el-tag class="ml-2" type="success" @click="tips">css</el-tag>
              <el-tag class="ml-2" type="info" @click="tips">javascript</el-tag>
            </el-menu-item>
            <el-menu-item index="4-2">
              <el-tag class="ml-2" type="warning" @click="tips">es6</el-tag>
              <el-tag class="ml-2" type="danger" @click="tips">moongodb</el-tag>
              <el-tag class="ml-2" type="info" @click="tips">git</el-tag>
            </el-menu-item>
             <el-menu-item index="4-3">
              <el-tag class="ml-2">vue</el-tag>
              <el-tag class="ml-2" type="success" @click="tips">elementui</el-tag>
              <el-tag class="ml-2" type="info" @click="tips">node</el-tag>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><Headset /></el-icon>音乐
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">
              <router-link to="/musicmenu">
                 <i class="iconfont icon-gedan"></i>我的歌单</router-link>
            </el-menu-item>
            <el-menu-item index="5-2" @click="ToggleControls">
            <i class="iconfont icon-yincangdaan" v-if="!$store.state.isShowControls"></i>
             <i class="iconfont icon-xianshi_huaban" v-else></i>{{ toggleText }}控件
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><UserFilled /></el-icon>关于
          </template>
          <el-menu-item-group>
              <el-menu-item index="6-1">
                 <router-link to="/project">
                     <i class="iconfont icon-zuopin"></i>
              个人作品</router-link>
            </el-menu-item>
            <el-menu-item index="6-2">
              <router-link to="/resume">
                <i class="iconfont icon-gerenjianli"></i>
                个人简历</router-link>
            </el-menu-item>
            <el-menu-item index="6-3">
              <router-link to="/more">
                 <i class="iconfont icon-gengduo"></i>
                更多</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup>
import Usermsg from "./UserMsg.vue";
import store from "@/store/index";
import { ref } from "vue";
let toggleText = ref("显示");
const ToggleControls = () => {
  toggleText.value = store.state.isShowControls ? "显示" : "隐藏";
  store.commit("ShowControls");
};
const tips=()=>{
  alert('点我也没得用，我还没写呢')
}
</script>

<style scope>
a {
  color: #303133;
  text-decoration: none;
}
.router-link-active{
    color: rgb(107, 107, 211);
}
.ml-2{
  margin-right: 10px;
}
.iconfont{
    margin-right: 10px;
    font-size: 17px !important;
}
.icon-jichu,.icon-wendang{
    margin-right: 15px;
}
</style>