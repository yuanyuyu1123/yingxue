<template>
    <div class="swiper-container" id="mySwiper" ref="cur">
        <div class="swiper-wrapper">
            <div v-for="carousel in list" :key="carousel.id" class="swiper-slide">
                <img :src="carousel.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'Carousel',
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    watch: {
        //监听bannerList数组的变化，由[]-->数组中有四个元素
        list: {
            immediate: true,
            handler(newVal, oldVal) {
                //如果执行handler方法，代表组件身上这个属性的属性已经有了【数组：四个元素】
                //再刷新的话，还是不行，说明结构还是没有
                //原因：当前这个函数执行，只能保证bannerList数据有了，但是没有办法保证v-for结构渲染出来了没。
                //解决：nextTick 在下次 DOM 更新  循环结束之后 执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
                //nextTick
                this.$nextTick(() => {
                    //当执行这个回调函数的时候：保证服务器数据回来了，v-for执行完毕了【轮播一定有了】
                    //更新dom之后
                    //保证页码中的结构一定是有的，经常和很多插件一起使用【都需要dom存在】
                    // console.log('nextTick')
                    var mySwiper = new Swiper(this.$refs.cur, {
                        loop: true, // 循环模式选项
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }
                    })
                })
            }
        }
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">
</style>
