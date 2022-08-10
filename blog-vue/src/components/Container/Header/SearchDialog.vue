<template>
    <el-dialog
      v-model="$store.state.dialogVisible"
      title="Search"
      width="30%"
    >
      <el-input
      v-model="inputText"
      class="w-50 m-2"
      placeholder="Please Input"
      :prefix-icon="Search"
      @keydown.enter="searchSomething"
    />
    </el-dialog>
</template>

<script setup>
import {
  Search,
} from "@element-plus/icons-vue";
import store from "@/store/index.js"
import { ref } from 'vue'
const inputText = ref('')
function searchSomething(){
    alert('该功能暂未开放')
    inputText.value=''
}
</script>

<style>
</style>