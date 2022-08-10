<template>
  <ul class="project" id="backtop">
    <li v-for="(item, index) in myProject" :key="index">
      <a :href="item.linkUrl">
        <img :src="item.img + ''" alt="" shadow="hover" />
        <acticle>
          <h4 class="title">{{ item.title }}</h4>
          <p class="project-content">{{ item.content }}</p>
          <sapn>更多 ></sapn>
        </acticle>
      </a>
    </li>
    <Backtop/>
  </ul>
</template>

<script setup>
import Backtop from "@/components/Backtop.vue"
const getAssetsImages = (path) => {
  return new URL(path, import.meta.url).href; //本地文件路径
};
const myProject = [
  {
    img: "https://ts1.cn.mm.bing.net/th/id/R-C.18f817f5e39ba1510265a87a91154eaf?rik=%2bqE3ibOg4XBAwQ&riu=http%3a%2f%2fapps.bdimg.com%2fstore%2fstatic%2fkvt%2f61bee40d9d96e00d9cbe328c97857a25.jpg&ehk=UihQUCGEqDk8SA3Ys8US6SYTrpyiKZ97MkL3n%2f0rCbs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    title: "打字游戏",
    content:
      "这是一个训练打字的小游戏，游戏可统计打字的正确率和错误率",
    linkUrl: " http://lao-weili.gitee.io/typing-game-",
  },
  {
    img: "https://android-screenimgs.25pp.com/fs08/2018/04/24/10/109_efab6f00fae70128fe26852c900b40db.jpeg",
    title: "找不同",
    content:
      "在规定时间内，通过找出N x N张图片中不同的一张，能增加得分，每找到一个分数累加10，同时N累加1，直到时间结束。",
    linkUrl: "http://lao-weili.gitee.io/find-different",
  },
  {
    img: "https://img.zcool.cn/community/01380255a46d7b6ac72539e3115045.jpg@1280w_1l_2o_100sh.jpg",
    title: "翻牌游戏",
    content:
      "在N x N张图片中，找到N对相同的图片，连续翻出两张相同的图片，这两张会保持被翻的状态，否则回转到未翻状态，直到N对牌子被翻完，游戏就算结束。",
    linkUrl: "http://lao-weili.gitee.io/image-de-duplication",
  },
  {
    img: "https://tse4-mm.cn.bing.net/th/id/OIP-C.7fgfmHUsgN7z2JzomzRYMgHaEu?pid=ImgDet&rs=1",
    title: "键盘控制人物行走",
    content:
      "可通过键盘的方向键控制视图中小人物的行走，只允许前后左右四个方向，斜角无效。",
    linkUrl: "http://lao-weili.gitee.io/keybord-game",
  },

  {
    img: "https://ts1.cn.mm.bing.net/th/id/R-C.2e5b004b9f9eb7de9c5c339da71c0b01?rik=OgqX93LW%2b6refg&riu=http%3a%2f%2fimg.cssmoban.com%2fUploadFiles%2f2021%2f7%2f2021020214324039830.png&ehk=kNH8nPLjfhkd2%2bzPZuYreBEh3YcAWJIPP6UwreL2TXA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    title: "仿京东静态网页",
    content:
      "这是一个仿京东的静态页面，首页包含轮播图，倒计时，商品展示数据，以及登录的入口，登录页面可通过登录改变首页的登录状态。(项目中的数据都是从京东官网爬取下来的)",
    linkUrl: "http://lao-weili.gitee.io/jdcom-website",
  },
  {
    img: "https://tse4-mm.cn.bing.net/th/id/OIP-C.ntA07X8iymT451JaQDMOsAHaEK?pid=ImgDet&rs=1",
    title: "简易音乐播放器",
    content:
      "这是一个简易的音乐播放器，可进行音乐的播放，切换歌曲，调整音量，切换模式（顺序、循环、随机）",
    linkUrl: "http://lao-weili.gitee.io/simple-yinye",
  },
  {
    img: "https://bbsmax.ikafan.com/static/L3Byb3h5L2h0dHBzL2ltZzIwMTguY25ibG9ncy5jb20vYmxvZy8xNTU2ODIzLzIwMTkwMS8xNTU2ODIzLTIwMTkwMTI3MTkzMTI2NzEyLTEzMzg4MjU4OC5wbmc=.jpg",
    title: "图书管理系统",
    content:
      "这是一个后台管理系统，基于node+MongoDB数据库完成，可实现对图书的增删改查处理。",
    linkUrl: "javascript:void(0);",
  },
  {
    img: "https://tse4-mm.cn.bing.net/th/id/OIP-C.Ld8PTF_ElaPg5AoL9gHHtwAAAA?pid=ImgDet&rs=1",
    title: "跑步app",
    content:
      "这是一个基于node+MongoDB+mui框架搭建的一个app,可实现用户的登录注册、头像上传、发布动态、查看动态、发起群聊、收藏课程、购买商品（仅支持加到购物车），可以对订单进行添加、移除或修改。",
    linkUrl: "javascript:void(0);",
  },
];
</script>
<style scope>
.project {
  list-style: none;
  min-width: 600px;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
}
.project a {
  display: block;
  width: 100%;
}
.project li {
  box-sizing: border-box;
  width: 24%;
  min-width: 290px;
  height: 430px;
  margin-right: calc(4% / 3);
  margin-bottom: 15px;
  box-shadow: 0 0 2px 3px rgb(240, 238, 238);
  background: white;
  border-radius: 5px;
  padding-bottom: 10px;
}
.project li:nth-of-type(4n) {
  margin-right: 0;
}
.project img {
  width: 100%;
  height: 220px;
  border-radius: 5px;
}
.project acticle {
  text-align: start;
  color: grey;
  margin: 10px;
  padding: 0 10px;
  text-align: start;
  display: flex;
  flex-direction: column;
}
.project .title {
  color: #495060;
  margin: 8px 0;
}
.project .project-content {
  margin: 5px 0 10px;
  line-height: 30px;
  height: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 14px;
}
.project span {
  text-align: start;
  font-size: 10px !important;
}
</style>
