<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <!--事件的委派，事件的委托，委派给他们的父元素 -->
            <div @mouseleave="leaveShow" @mouseenter="enterShow">
                <h2 class="all">全部商品分类</h2>
                <!-- 过渡动画 -->
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <!-- 一级 -->
                            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId">
                                <h3 @mouseenter="changeIndex(index)" :class="{ cur: currentIndex == index }">
                                    <a :data-categoryName="c1.categoryName" :data-category2Id="c1.categoryId">{{ c1.categoryName }} </a>
                                </h3>
                                <!-- 二级、三级 -->
                                <div class="item-list clearfix" :style="{display:currentIndex == index?'block':'none'}">
                                    <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>

                                                <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>

            </div>

            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
// console.log(mapState(['categoryList','a']))
// mapState:https://vuex.vuejs.org/zh/guide/state.html#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0
import throttle from "lodash/throttle"

export default {
    name: "TypeNav",
    data() {
        return {
            //存储用户鼠标移到哪个一级分类
            currentIndex: -1,
            show: true
        };
    },
    computed: {
        ...mapState({
            //右侧需要的是一个函数，当使用这个计算属性时，右侧函数会立即调用
            //注入一个参数state,其实即为大仓库中的数据
            categoryList: (state) => state.home.categoryList,
        }),
        // ...mapState('home',{categoryList:'categoryList'})//==>运行出来是错的
    },
    created() {
    },
    //组件挂载完毕：可以向服务器发请求
    mounted() {
        //  console.log(this)
        // //通知Vue发请求，获取数据，存储仓库中
        // this.$store.dispatch("categoryList");
        //当组件挂载完毕，让show属性又要变成fale
        //如果不是home路由主机，将typeNav进行隐藏
        if (this.$route.path != '/home') {
            this.show = false
        }
    },
    methods: {
        //鼠标进去修改currentIndex的值
        // changeIndex(index) {
        //     //index鼠标移入的元素索引值
        //     //正常：用户慢慢来操作，鼠标进入，每个一级分类都会触发鼠标进入事件
        //     //非正常：用户操作很快，鼠标进入，本身全部一级分类都应该触发鼠标进入事件，但是经过测试，只有部分触发了
        //     //就是由于用户行为过快，浏览器反应不过来，如果当前回调中有大量业务，有可能出现卡顿现象
        //     this.currentIndex = index;
        //     console.log('鼠标进入'+index)
        // },
        //throttle函数别用this,可能会出现上下文this
        changeIndex: throttle(function (index) {
            this.currentIndex = index;
            // console.log('鼠标进入' + index)
        }, 50),

        goSearch(event) {
            // this.$router.push('/serch')
            //区分点击的是a，把子节点中a标签 加自定义属性data-categoryName，其余节点没有
            let element = event.target;
            //获取当前事件节点，需要带data-categoryName的节点
            //节点dataset属性，可以获取节点自定义属性与属性值
            let { categoryname, category1id, category2id, category3id, a } = element.dataset
            // console.log(a)//不存在为undefined
            if (categoryname) {
                //整理路由跳转参数
                let location = { name: 'search' };
                let query = { categoryName: categoryname };
                //区分1、2、3级标签
                if (category1id) {
                    query.category1id = category1id;
                } else if (category2id) {
                    query.category2Id = category2id;
                } else {
                    query.category3Id = category3id;
                }
                location.query = query;
                //如果路由跳转有params参数，要带过去
                //如果路由有query也要带
                location.params=this.$route.params;
                this.$router.push(location);
            }


        },
        //当鼠标进入，让商品分类列表进行显示
        enterShow() {
            if (this.$route.path != '/home') {
                this.show = true
            }
        },
        // 一级标签鼠标移除
        leaveShow() {
            // 一级标签鼠标移除
            this.currentIndex = -1;
            //search页面才执行
            if (this.$route.path != '/home') {
                this.show = false
            }

        },
    },
};
</script>

<style scoped lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;
            // overflow: hidden;
            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    // &:hover {
                    //     .item-list {
                    //         display: block;
                    //     }
                    // }
                }
                h3.cur {
                    background: #dae8fc;
                }
            }
        }
        // 过渡动画开始的动态
        .sort-enter{
           height: 0;
        }
        // 过渡动画的结束状态
        .sort-enter-to{
             height: 461px;
        }
        //定义动画时间  速率
        .sort-enter-active{
            transition: all 0.5s linear;
        }
    }
}
</style>
