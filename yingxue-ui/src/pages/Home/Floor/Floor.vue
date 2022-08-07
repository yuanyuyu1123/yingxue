<template>
    <div class="floor">
        <div class="py-container">
            <div class="title clearfix">
                <h3 class="fl">{{floor.name}}</h3>
                <div class="fr">
                    <ul class="nav-tabs clearfix">
                        <li class="active" v-for="nav in floor.navList" :key="nav.text">
                            <a :href="nav.url" data-toggle="tab">{{nav.text}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-pane">
                    <div class="floor-1">
                        <div class="blockgary">
                            <ul class="jd-list">
                                <li v-for="keyword in floor.keywords" :key="keyword">{{keyword}}</li>
                            </ul>
                            <img :src="floor.imgUrl" />
                        </div>
                        <div class="floorBanner">
                            <Carousel :list="floor.carouselList" />
                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img :src="floor.recommendList[0]" />
                            </div>
                            <div class="floor-conver-pit">
                                <img :src="floor.recommendList[1]" />
                            </div>
                        </div>
                        <div class="split center">
                            <img :src="floor.bigImg" />
                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img :src="floor.recommendList[2]" />
                            </div>
                            <div class="floor-conver-pit">
                                <img :src="floor.recommendList[3]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'Floor',
    props: {
        floor: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    mounted() {
        //为什么这个new Swipe放在可以，
        //第一次书写轮播图，是在请求是在当前组件内部发请求、动态渲染解构【前台至少服务器数据需要回来】，所以不行
        //在Floor组件内部没有发请求，数据是父组件给的，结构已经遍历好了。而且在结构已经有了的情况下，才执行了mounted
        // var mySwiper = new Swiper(this.$refs.floorSwiper, {
        //     loop: true, // 循环模式选项
        //     // 如果需要分页器
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        //     },

        //     // 如果需要前进后退按钮
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     }
        // })
    },
    watch: {
        // floor: {
        //     //监听不到是因为floor没有变化。是父亲直接给的
        //     //数据不管有没有变化，立即执行一次
        //     immediate: true,
        //     handler() {
        //         //只能监听到数据已经有了，v-for是否渲染了还是没办法确认
        //         this.$nextTick(() => {
        //             var mySwiper = new Swiper(this.$refs.cur, {
        //                 loop: true, // 循环模式选项
        //                 // 如果需要分页器
        //                 pagination: {
        //                     el: '.swiper-pagination',
        //                     clickable: true,
        //                 },

        //                 // 如果需要前进后退按钮
        //                 navigation: {
        //                     nextEl: '.swiper-button-next',
        //                     prevEl: '.swiper-button-prev',
        //                 }
        //             })
        //         })

        //     }
        // }
    }
}
</script>

<style  lang="less" scoped>
.floor {
    margin-top: 15px;

    .py-container {
        width: 1200px;
        margin: 0 auto;

        .title {
            .fl {
                float: left;
                color: #c81623;
                font-size: 20px;
                line-height: 30px;
                margin: 9px 0;
                font-weight: 700;
            }

            .fr {
                float: right;

                .nav-tabs {
                    margin: 10px 0 0;
                    display: inline-block;

                    li {
                        float: left;
                        line-height: 18px;

                        a {
                            padding-top: 1px;
                            font-weight: 400;
                            background-color: #fff;

                            &::after {
                                content: "|";
                                padding: 0 10px;
                            }
                        }

                        &:nth-child(7) {
                            a {
                                &::after {
                                    content: "";
                                }
                            }
                        }

                        &.active {
                            a {
                                color: #e1251b;
                            }
                        }
                    }
                }
            }
        }

        .tab-content {
            border-top: 2px solid #c81623;
            border-bottom: 1px solid #e4e4e4;

            .tab-pane {
                .floor-1 {
                    height: 360px;
                    display: flex;

                    .blockgary {
                        width: 210px;
                        height: 100%;
                        background: #f7f7f7;

                        .jd-list {
                            padding: 15px 0;
                            overflow: hidden;

                            li {
                                list-style-type: none;
                                float: left;
                                width: 40%;
                                margin: 0 10px;
                                border-bottom: 1px solid #e4e4e4;
                                text-align: center;
                                line-height: 26px;
                            }
                        }

                        img {
                            width: 100%;
                        }
                    }

                    .floorBanner {
                        width: 330px;
                        height: 100%;
                    }

                    .split {
                        width: 220px;
                        height: 100%;
                        position: relative;

                        .floor-x-line {
                            position: absolute;
                            background: #e4e4e4;
                            width: 220px;
                            height: 1px;
                            top: 180px;
                        }

                        .floor-conver-pit {
                            width: 100%;
                            height: 50%;

                            img {
                                width: 100%;
                                height: 100%;
                                transition: all 400ms;

                                &:hover {
                                    opacity: 0.8;
                                }
                            }
                        }
                    }

                    .center {
                        border: 1px solid #e4e4e4;
                    }
                }
            }
        }
    }
}
</style>
