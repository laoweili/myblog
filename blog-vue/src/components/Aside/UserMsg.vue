<template>
  <div class="userMsg">
    <!-- <p>这里放一个组件，博客头像，博客昵称、背景图</p> -->
    <img
      src="https://ts1.cn.mm.bing.net/th/id/R-C.5e6f786e0a970f9ad1f0af523c9f3383?rik=awWraaLjxCbnPg&riu=http%3a%2f%2fimg.dahepiao.com%2fuploads%2fallimg%2f190919%2f163879-1Z919154636354.jpeg&ehk=M8yfXsmnrjAMCnWxpWYYvqyZXGQd2llYUqXzdpkSAdY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
      alt=""
      class="banner"
    />
    <div class="content">
      <!-- <el-avatar shape="square" :size="65" :src="$store.state.isLogin?loginAvatar:commonAvatar" class="avatar"
       /> -->
      <el-avatar
        shape="square"
        :size="65"
        :src="$store.state.songData[$store.state.currentSongIndex].cover"
        class="avatar"
      />
      <p class="position" style="left: 6px; margin: 2px 0">
        <el-icon color="#fff" :size="size"><Male /></el-icon>
        <el-icon color="#fff" :size="size"><Location /></el-icon>
        <span style="margin-left: 5px; font-size: 14px">china</span>
      </p>
      <p class="position">
        <el-icon :size="size">
          <Edit />
        </el-icon>
        <span
          style="position: relative; top: -2px; margin-left: 5px"
          v-if="$store.state.isLogin"
          >佩奇不是猪</span
        >
        <span style="position: relative; top: -2px; margin-left: 5px" v-else
          >未知用户</span
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";
const size = "16px";
const state = reactive({
  commonAvatar:
    "https://ts1.cn.mm.bing.net/th/id/R-C.baa2d1577cf82ad47aa705957237bff6?rik=IciTRLgFHnunww&riu=http%3a%2f%2fwww.sucaijishi.com%2fuploadfile%2f2016%2f0203%2f20160203022632945.png&ehk=4PjlDtyivWKN7CP%2b5JlcgUiuD1nyme8IaxbNbPnANIw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  loginAvatar:
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.taoguba.com.cn%2Fimg%2F2021%2F06%2F27%2Fs0irndca7w8k.jpg%3F515111040_80wh.png&refer=http%3A%2F%2Fimage.taoguba.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659707336&t=b63cb411942d28b103d0fd71746123f4",
});
const { fits, commonAvatar, loginAvatar } = toRefs(state);
</script>

<style>
.userMsg {
  position: relative;
  height: 160px;
}
.banner {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}
.content {
  width: 100px;
  position: absolute;
  left: 10px;
  top: 35px;
}
.position {
  position: relative;
  left: 10px;
  z-index: 10;
  font-size: 12px;
  color: #fff;
}
.avatar {
  border-radius: 50% !important;
  animation: rotate360 1s linear ;
}
@keyframes rotate360 {
  0%{
     transform: translateX(-100px);
  }
  100% {
    /* transform: rotate(360deg); */
    /* transform: scale(1.3); */
    transform: translateX(0);
  }
}
</style>