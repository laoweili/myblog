<template>
    <div id="backtop">
        <div class="header-tou">
            <img
                src="https://ts1.cn.mm.bing.net/th/id/R-C.7d37a69922f19c78e5550bec0584548b?rik=XcovT845F0BTBg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f201911%2f17%2f1573962341461558.jpg&ehk=mEXq1oYP1iagCCH956DXjUuJnhErtgZoLfFWHjejV7o%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
            />
        </div>
        <!-- 简介 -->
        <div class="header-info">
            <p>世上只有一种英雄主义——就是在认清生活的真相之后依然热爱生活</p>
        </div>
        <!-- 社交信息 -->
        <div class="top-social">
            <div v-for="item in socials" :key="item.id" :title="item.title">
                <a :href="item.href" target="_blank" :style="{ color: item.color }">
                    <i class="iconfont" :class="item.icon"></i>
                </a>
            </div>
        </div>
        <Post />
        <Backtop/>
    </div>
</template>

<script setup>
import Post from "./Post.vue"
import Backtop from "@/components/Backtop.vue"
const myCarouselImg = [
    "https://ts1.cn.mm.bing.net/th/id/R-C.4374507b83bf9e8ca013f5fd5c50a38a?rik=YrEHDhqEe8RJIw&riu=http%3a%2f%2f1822.img.pp.sohu.com.cn%2fimages%2fblog%2f2008%2f6%2f27%2f22%2f5%2f11b6fadec88.jpg&ehk=Xua%2fDod92oG5xbAgJYZ0lb4hvApndDFXy9wANR2uP08%3d&risl=&pid=ImgRaw&r=0",
    "https://ts1.cn.mm.bing.net/th/id/R-C.85ccd1119ac78cc31d5bacfee2adb114?rik=tk6hFZnjiYOcvw&riu=http%3a%2f%2fwww.west999.com%2finfo%2fupload%2f20191016%2fs1avf1yjvke.png&ehk=zBLqEdxLXc5Imu4v%2fgkTGkNzckXI8c0NcOYmYQEeLzQ%3d&risl=&pid=ImgRaw&r=0",
    "https://clubimg.club.vmall.com/data/attachment/forum/201903/18/2019356itzcw7lvve0s4hb.jpg",
    "https://pic4.zhimg.com/v2-dda26d6496152b846bad4b04a7cdcf0c_r.jpg?source=172ae18b",
]
const socials = [
    { id: 1, title: "gitee", href: "https://gitee.com/lao-weili", icon: "icon-gitee", color: "#d81e06" },
    { id: 2, title: "github", href: "https://github.com/13328383933/myblog", icon: "icon-github", color: "#515151" },
    { id: 3, title: "QQ", href: "http://wpa.qq.com/msgrd?v=3&uin=744619344&site=qq&menu=yes", icon: "icon-qq", color: "#1296db" },
    { id: 4, title: "zhihu", href: "https://www.zhihu.com/people/kan-kan-29-76", icon: "icon-shejiaotubiao-46", color: "#1296db" },
]
const handleBacktop=()=>{
    homePage.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}
</script>

<style scope>
.carousel {
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
.header-info {
    width: 50%;
    font-size: 14px;
    color: #eaeadf;
    background: rgba(0, 0, 0, 0.66);
    padding: 20px 30px;
    margin: 30px auto 0 auto;
    font-family: miranafont, "Hiragino Sans GB", STXihei, "Microsoft YaHei", SimSun, sans-serif;
    letter-spacing: 1px;
    line-height: 30px;
}
.header-tou img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
}
.top-social {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.top-social div {
    margin: 10px;
}
.top-social a {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.top-social .iconfont{
    font-size: 25px !important;
}
.icon-shejiaotubiao-46,.icon-github{
    font-size: 28px !important;
    position: relative;
    top: -2px;
}
</style>
