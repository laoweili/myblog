<script setup>
  function getImageUrl(path) {
  return new URL(path, import.meta.url).href}
  const myCarouselImg = [
  "https://pic1.zhimg.com/v2-27e2f81f0b20c79a2b6dd093f06062d1_1200x500.jpg",
  "https://www.icketang.com/static/upload/202010/03370683821580559522.png",
  "https://ts1.cn.mm.bing.net/th/id/R-C.ac72fd31f77fcc6597e62456081ad560?rik=h%2fwEXikznK3hFg&riu=http%3a%2f%2fwww.atguigu.com%2fwp-content%2fuploads%2f2019%2f07%2fwebsd.jpg&ehk=gpg0lGRevGcpuBsnf%2f990P0EE6n5hKNFS97DOTqszo0%3d&risl=&pid=ImgRaw&r=0",
  "https://pica.zhimg.com/v2-272a902abca098b987de517901ced622_720w.jpg?source=172ae18b",
];
</script>

<template>
    <div class="front-end-foundation">
            <el-carousel indicator-position="outside" class="carousel">
      <el-carousel-item v-for="(item, index) in myCarouselImg" :key="index">
        <h3 text="2xl" justify="center">
          <img :src="item" alt="" />
        </h3>
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<style scoped>
img{
    width: 100px;
    height: 80px;
}
.carousel {
  /* width: calc(100% - 25px); */
  margin: 10px auto 0;
}
.el-carousel__container {
  height: 500px;
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 500px;
  height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 500px;
}
</style>