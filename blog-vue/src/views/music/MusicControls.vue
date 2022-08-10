<template>
 <div id="music">
    <!-- 准备一个容器用来存放音乐播放器 -->
    <div id="aplayer"></div>
  </div>
</template>

<script>
import APlayer from "APlayer"; // 引入音乐插件
import store from "@/store/index";
export default {
  name: "MusicControls",
  data() {
    return {
      audio: [ 
      ],
      info: {
        fixed: true, // 不开启吸底模式
        listFolded: true, // 折叠歌曲列表
        autoplay: false, // 开启自动播放
        preload: "none", // 自动预加载歌曲
        loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
        order: "list", //  播放模式，list列表播放, random随机播放
      },
    };
  },
  mounted() {
    // 初始化播放器
    this.initAudio();
  },
  methods: {
    initAudio() {
      // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
      const ap = new APlayer({
        container: document.getElementById("aplayer"),
        fixed: true, 
        audio: store.state.songData, // 音乐信息
        info:this.info
      });
      ap.on("loadeddata",function(e){
        //  console.log();
         store.state.currentSongIndex=ap.list.index
      })
    },
  },
};
</script>

<style scope>
#music {
  height: 200px;
}
li{
  padding: 0;
}
 #aplayer {
    width: 400px;
  }
  .aplayer-list-index,.aplayer-list-title,.aplayer-list-author{
    display: inline-block;
    width: calc(100%/3);
    position: relative;
    z-index: 10;
  }
  .aplayer-list-index{
     left: -80px;
  }
  .aplayer-list-title{
    left: 20px;
     text-align: start;
  }
  .aplayer-list-author{
    top: -32px;
    left: -160px;
    text-align: start;
  }
</style>