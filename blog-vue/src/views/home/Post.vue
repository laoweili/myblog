<script setup>
import { onMounted, reactive, ref } from "vue";
import { getHomeList } from "@/api/index";
import store from "@/store/index"
const getAssetsImages = (path) => {
  return new URL(path, import.meta.url).href; //本地文件路径
};
const backgroundImgUrl=store.state.homeBackgroundImg
let nowPage = ref(1);
let moreShowBoolen = ref(false);
let list = [];
let obj = reactive({
  list,
});

const getList = onMounted(
  getHomeList().then((res) => {
    console.log(res);
    if (res.data.length <= 5) {
      // 5条数据一页
      obj.list = res.data;
      moreShowBoolen.value = false;
    } else {
      obj.list = res.data.slice(0, 5);
      moreShowBoolen.value = true;
    }
  })
);
const loadMore = () => {
  getHomeList().then((res) => {
    obj.list = obj.list.concat(
      res.data.slice(nowPage.value * 5, (nowPage.value + 1) * 5)
    );
    if (res.data.length >= nowPage.value * 10) {
      moreShowBoolen.value = true;
      nowPage.value++;
    } else {
      moreShowBoolen.value = false;
    }
  });
};
</script>

<template>
  <div class="postCom">
    <div class="postComTop">
      <img :src="backgroundImgUrl" alt="">
    </div>
    <section v-if="obj.list" style="" class="postList">
      <div v-for="post in obj.list" :key="post.id">
        <article class="post post-list">
          <div class="post-entry">
            <div class="feature">
              <img :src="post.banner" />
            </div>
            <h1 class="entry-title">
              <span v-if="post.isTop" style="color: #ff6d6d; font-weight: 600"
                >[置顶] </span
              >{{ post.title }}
            </h1>
            <div class="p-time">
              <i class="iconfont icon-iconmeditor-time"></i>
              {{ post.pubTime
              }}<i
                v-if="post.isHot"
                class="iconfont icon-iconfire"
                style="margin-left: 5px; color: #ff6d6d"
              ></i>
            </div>
            <p class="summary">{{ post.content }}</p>
            <footer class="entry-footer">
              <div class="post-more">
                <i class="iconfont iconfish-li" style="font-size: 25px"></i>
              </div>
              <div class="info-meta">
                <div class="comnum">
                  <span>
                    <i class="iconfont icon-iconcomment"></i>
                    <a href="https://zhebk.cn/Web/Akina.html"
                      >{{ post.commentsCount }} 条评论</a
                    >
                  </span>
                </div>
                <div class="views">
                  <span
                    ><i class="iconfont icon-iconfire"></i
                    >{{ post.viewsCount }} 热度</span
                  >
                </div>
              </div>
            </footer>
          </div>
          <hr />
        </article>
      </div>
      <div class="more" v-if="moreShowBoolen">
        <div class="more-btn" @click="loadMore">更多</div>
      </div>
      <div v-else style="color: #adadad; text-align: center">到底了...</div>
    </section>
  </div>
</template>

<style scoped lang="less">
.postComTop {
  height: 200px;
}
.postComTop img{
    width: 100%;
    height: 100%;
}
.postList {
  background: white;
  // background: rgba(191, 213, 238, 0.5);
  padding: 20px 30px 10px 120px;
  box-sizing: border-box;
  text-align: start;
  border-radius: 10px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
.post {
  margin: 50px auto 4%;
  width: 71%;
  min-width: 886px;
  position: relative;
}

.post-entry {
  .feature {
    position: absolute;
    margin-top: 10px;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      padding: 2px;
      border: 1px solid #dadada;
      position: relative;
      transition: all 0.2s linear;
      overflow: hidden;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }

  .entry-title {
    font-size: 21px;
    font-weight: 600;
    line-height: 50px;
    margin: 0 0 0 17%;
    position: relative;
    z-index: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 70%;
    color: #737373;

    & a:hover {
      color: #8fd0cc;
    }
  }

  .p-time {
    position: absolute;
    right: 0;
    top: 16px;
    font-size: 12px;
    color: #989898;
    letter-spacing: 1px;
    font-family: din, "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif;
    display: flex;
    align-items: center;
  }

  p.summary {
    min-height: 60px;
    margin: 0 0 0 17%;
    font-size: 15px;
    color: #6f6f6f;
    letter-spacing: 1px;
    line-height: 30px;
  }

  footer.entry-footer {
    margin: 0 0 0 17%;
    list-style: none;

    .post-more {
      margin-top: 10px;
      text-align: right;
      color: #a0dad0;

      a:hover {
        color: #737373;
      }
    }

    .info-meta {
      margin-top: 10px;
      font-family: din, "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif;
      position: absolute;
      top: 20px;
      opacity: 0;
      padding-top: 8px;
      border-top: 1px solid #ddd;
      -webkit-transform: translate3d(-150px, 0, 0);
      transform: translate3d(-150px, 0, 0);
      visibility: hidden;
      transition: 0.7s all ease;
      -webkit-transition: 0.6s all ease;
      -moz-transition: 0.6s all linear;
      -o-transition: 0.6s all ease;
      -ms-transition: 0.6s all ease;

      span,
      a {
        color: #b3b3b3;
        font-size: 12px;
      }

      i {
        margin-top: 3px;
        margin-right: 10px;
        float: left;
      }
    }

    .comnum {
      float: left;
    }
  }
}

.post-entry:hover footer.entry-footer .info-meta {
  -webkit-transform: translate3d(-230px, 0, 0);
  transform: translate3d(-230px, 0, 0);
  opacity: 1;
  visibility: visible;
}

.post hr {
  width: 30%;
  height: 1px;
  margin: 0 auto;
  border: 0;
  background: #efefef;
}
.more {
  margin: 20px 0;
  .more-btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #adadad;
    border: 1px solid #adadad;
    border-radius: 20px;
    margin: 0 auto;
    cursor: pointer;
    &:hover {
      color: #8fd0cc;
      border: 1px dashed #8fd0cc;
    }
  }
}
/*******/
@media (max-width: 1060px) {
  .info-meta {
    display: none;
  }
}
@media (max-width: 800px) {
  .post-entry {
    .feature img {
      width: 50px;
      height: 50px;
    }
    .entry-title {
      font-size: 16px;
      line-height: 30px;
      margin: 0 0 0 65px;
    }
    .p-time {
      position: relative;
      margin: -15px 0 0 65px;
    }
    p.summary {
      margin: 20px 0 0 65px;
      font-size: 14px;
      height: 30px;
      overflow: hidden;
    }
    .post-more {
      display: none;
    }
  }
  .post-list hr {
    margin-top: 20px;
  }
}
section > div {
  margin-bottom: 10px;
}
.pagination {
  position: relative;
  top: 35px;
  left: 40px;
}
.iconfont {
  font-size: 18px !important;
}
</style>