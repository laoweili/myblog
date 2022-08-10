<script setup>
import Aside from "./Layout/Aside.vue";
import Container from "./Layout/Container.vue";
import axios from "axios";
import MusicControls from "@/views/music/MusicControls.vue";
</script>
<template>
  <el-container
    class="layout-container-demo"
    style="height: 100vh"
    :id="$store.state.isDarkThem ? 'dark' : 'nodark'"
  >
    <!-- 侧栏 -->
    <Aside :class="$store.state.isShow ? 'showAsideBar' : 'hideAsideBar'"/>
    <!-- 主体内容 -->
    <Container
      :class="$store.state.isShow ? 'showAllContainer' : 'showPartContainer'"
    />
    <MusicControls v-show="$store.state.isShowControls" />
  </el-container>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout-container-demo .el-header {
  position: relative;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.el-footer {
  height: 66px !important;
}
.el-menu--vertical {
  background-color: rgba(250, 250, 248, 0.945) !important;
}
#nodark .el-aside {
  background: var(--el-color-primary-light-8);
}
#nodark .el-header,
#nodark .el-footer {
  background-color: var(--el-color-primary-light-7);
}
#nodark .el-col {
  color: rgb(134, 120, 120);
}
#dark .el-col {
  color: #fff;
}
#nodark .show-aside-left {
  color: rgb(134, 120, 120) !important;
}
#dark .show-aside-left {
  color: #fff !important;
}
#dark .el-aside {
  background-color: #9b9ea1;
}
#dark .el-header,
#dark .el-footer {
  background-color: #73767a;
}
.show_aside {
  position: absolute;
  height: 20px;
  left: 15px;
  top: calc(50% - 10px);
}
.showAsideBar {
  width: 250px !important;
 transition: all .3s linear;
}
.hideAsideBar {
   width: 0 !important;
  transition: all .3s linear;
}
.showPartContainer {
  width: calc(100% - 250px);
  transition: all .3s linear;
}
.showAllContainer {
  width: 100%;
  transition: all .3s linear;
}
</style>
