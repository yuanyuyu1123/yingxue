<template>
    <div>
        <a :title="title">
            <!-- 不能使用语法糖 -->
             <el-button v-bind="$attrs" v-on="$listeners">{{txt}}</el-button>
        </a>
        <!-- <childA/> -->
    </div>
</template>

<script>
import childA from './childA'
export default {
    props:['title','txt'],
    data() {
        return {

        };
    },
    components:{
        childA  
    },
    created() {

    },
    mounted() {
        // $$attrs 属于组件的一个属性，可以获取到父组件传递过来的props数据
        //如果于子组件已经通过props接收的属性，在$attrs属性当中是获取不到哦的
        console.log(this.$attrs);//{type: 'success', icon: 'el-icon-delete', size: 'minni'}
        //$listeners,也是组件实例自身的一个属性，它可以获取到父组件给子组件传递的自定义事件
        console.log(this.$listeners);
    },
    methods: {

    }
};
</script>

<style scoped lang="less">

</style>
