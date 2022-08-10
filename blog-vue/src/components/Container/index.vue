<template>
  <el-container>
    <!-- 头部 -->
    <Header/>
    <!-- 主体 -->
    <Main/>
    <!-- 尾部 -->
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script setup>
import Header from './Header/index.vue'
import Main from "./Main/index.vue"
import Footer from "./Footer/index.vue";
import store from '@/store/index'
const isShowMusicControls=false;
</script>
<style scope>
</style>