<template>
    <div class="about">
        <div class="site-content">
            <div class="content-warp">
                <div class="about-site about-info">
                    <div><span>❤</span>关于博客</div>
                    <div class="info-card">
                        <p>看见过很多大牛搭建的博客，心想不如自己也动手搭建一个吧，然后就开始用Vue+Element-ui搭建这种风格的博客，尽管内容还不完善，但是也想将这套模板开放给大家。<a target="_blank" href="https://gitee.com/lao-weili/myblog" style="color: #ff6d6d;">Gitee仓库</a>记得star★哟</p>
                        <p>此外，推荐一款博客主题 <a target="_blank" class="out-link" href="https://zhebk.cn/Web/Akina.html" style="color: #ff6d6d;">Akina For Typecho</a>，风格也很nice哟。</p>
                    </div>
                </div>
                <div class="about-me about-info">
                    <div id="Guestbook"><span>❤</span>给我留言</div>
                    <div class="info-card">
                        <div class="contactForm">
                            <div class="form-item">
                                <label for="mail">邮箱</label>
                                <input class="v" type="email" name="mail" id="mail" placeholder="744619344@qq.com">
                            </div>
                            <div class="form-item">
                                <label for="content">内容</label>
                                <textarea class="v" id="content" name="content" placeholder="留言功能暂未开放，可通过以上邮箱联系到我"></textarea>
                            </div>
                            <div class="form-item">
                                <label></label>
                                <button>提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import Quote from "@/components/quote";
    // import {fetchFriend} from '../api'
    export default {
        name: "About",
        data() {
            return {
                list: []
            }
        },
        components: {
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style scoped lang="less">
    .about {
        background: white;
        height: 100%;
        background: url(https://ts1.cn.mm.bing.net/th/id/R-C.8dd9a736be086be3cf53f1cb335b5e3c?rik=8iwnqwe8tb3ugQ&riu=http%3a%2f%2f15wo.oss-cn-beijing.aliyuncs.com%2fwallpaper%2fca5%2f5cca56a1c09cf.jpg!1275x717&ehk=9NXjvYNWY%2bJskVm6BgF1z%2b6OfAtPWI38vtvShfh5v6w%3d&risl=&pid=ImgRaw&r=0);
        background-size: cover;
        box-sizing: border-box;
    }

    .content-warp {
        .about-info {
            margin: 0 auto 0;
            padding: 20px 0;
            width: 70%;
            text-align: start;
            span {
                color: red;
                margin-right: 10px;
            }

            .info-card {
                min-height: 100px;
                 min-width: 600px;
                padding: 10px;
                border-radius: 3px;
                margin: 30px 0 20px 0;
                box-sizing: border-box;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                 background-color:rgba(168, 197, 241, 0.8);
                p{
                    line-height: 1.7rem;
                }
            }
        }
        .contactForm{
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            .form-item{
              overflow: hidden;
                align-items: center;
                display: flex;
                &:not(:last-child){
                    margin-bottom: 20px;
                }
                label{
                  width: 80px;
                }
                .v{
                    min-height: 40px;
                    line-height: 20px;
                    border-radius: 3px;
                    padding: 2px 10px;
                    outline:none;
                    border: 1px solid #8fd0cc;
                    width: 100%;
                    resize: vertical;
                }
                button{
                    width: 100px;
                    height: 40px;
                    border-radius: 3px;
                    outline:0;
                    border-style: none;
                    cursor: pointer;
                    background-color: #409eff;
                    color: white;
                    &:hover{
                        opacity: 0.8;
                    }
                }
            }
        }
    }

    /*******/
    @media (max-width: 800px) {
        .content-warp {
            margin-top: 0;
        }
    }
</style>
