<template>
   <el-header style="text-align: right; font-size: 12px">
      <span class="show_aside">
        <el-icon size="25px" @click="showAsideBar"  class="show-aside-left">
            <template v-if="$store.state.isShow">
                <el-icon><Fold /></el-icon>
            </template>
            <template v-else>
                <el-icon><Expand /></el-icon>
            </template>
        </el-icon>
      </span>
      <div class="toolbar">
        <el-row>
          <el-button :icon="swi"  circle  plain @click="toggleTopics" title="切换主题"></el-button>
          <el-button :icon="Search" circle title="搜索" @click="toggleSearchDialog" plain/>
          <el-button  :icon="User" circle title="管理员登录入口" @click="toggleLoginDialog" plain/>
        </el-row>
      </div>
    </el-header>
</template>

<script setup>
import {
  Open,
  TurnOff,
  Search,
  User,
} from "@element-plus/icons-vue";
import store from "@/store/index"
import {ref,reactive} from "vue"
let swi=ref(TurnOff.name);
let isOn=false;
const showAsideBar=()=>{
   store.commit('ShowAside')
}
function toggleTopics(){
  isOn=!isOn;
  swi.value=isOn?Open.name:TurnOff.name;
  store.commit('ToggleThemes')
}
function toggleSearchDialog(){
  store.commit('ChangeDialogVisible')
}
function toggleLoginDialog(){
    if(!store.state.isLogin) store.commit('ToggleLoginDialogVisible')
}
</script>

<style>

</style>