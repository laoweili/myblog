<template>
  <div>
    <el-row :gutter="20" class="my-footer">
      <el-col :span="3" :offset="3"
        ><el-icon><CaretRight /></el-icon>快速通道</el-col
      >
      <el-col :span="6" :offset="1"
        ><el-icon><CaretRight /></el-icon>本站已稳定运行{{runTime}}</el-col
      >
      <el-col :span="10" :offset="1"
        ><el-icon><CaretRight /></el-icon>本博客是基于
        <el-link type="success" href="https://v3.cn.vuejs.org/" target="_blank"
          >vue</el-link
        >+
        <el-link
          type="success"
          href="https://element-plus.org/zh-CN/"
          target="_blank"
          >element-ui</el-link
        >开发的，相关文档请移至官网学习
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3" :offset="3"
        ><el-icon><CaretRight /></el-icon>
         <a
          href="https://gitee.com/lao-weili"
          target="_blank"
          type="info"
          style="color:rgb(134, 120, 120)"
          >码云</a
        >
        </el-col
      >
      <el-col :span="6" :offset="1"
        ><el-icon><CaretRight /></el-icon>744619344@qq.com</el-col
      >
      <el-col :span="6" :offset="1"
        ><el-icon><CaretRight /></el-icon>友情链接</el-col
      >
    </el-row>
  </div>
</template>
<script setup>
let startTimestamp = new Date("2022-7-1").getTime();
let nowTimestamp = new Date().getTime();
let Subtraction = nowTimestamp - startTimestamp;
function formatDuring(mss) {
  var days = parseInt(mss / (1000 * 60 * 60 * 24));
  var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = (mss % (1000 * 60)) / 1000;
  return days + " 天 " + hours + " 小时 " + minutes + " 分钟 ";
}
const runTime=formatDuring(Subtraction)
</script>

<style scope>
.my-footer {
  padding-top: 10px;
}
.el-footer .el-row {
  margin-bottom: 20px;
}
.el-col {
  height: 10px;
  font-size: 13px;
  text-align: start;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
