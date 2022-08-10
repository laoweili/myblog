<template enter-class="add">
    <el-main class="background">
        <SearchDialog />
        <Login />
        <router-view />
    </el-main>
</template>
<script setup>
import SearchDialog from "../Header/SearchDialog.vue"
import Login from "../Header/Login.vue"
</script>
<style scope>
.musicControls {
    position: fixed;
    top: 200px;
    right: 0;
    z-index: 80;
}
.el-main {
    padding: 10px !important;
}
.background {
    background-image: url(https://s1.ax1x.com/2020/05/23/YxaLMq.jpg);
    background-size: cover;
}
</style>
