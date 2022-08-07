<template>
    <div>
        <!-- 主要作用，收集表单元素 -->
        <input type="text" v-model="msg"> {{msg}}  <br>
        <!-- 原理 -->
        <!-- 通过value和input事件实现v-model -->
        <input type="text" :value="msg" @input="msg=$event.target.value">  {{msg}}<br>
        <!--组件通讯--父子组件数据同步-->
        <!--
            :value：props,父子组件通讯
             @input：自定义事件
             $event这个时候是子组件传过来的值
            -->
        <ElemnetInput  :value="msg" @input="msg=$event"/>
        <!-- 所以在非表单元素身上可以使用 -->
        <ElemnetInput  v-model="msg"/>
    </div>
</template>

<script>
import ElemnetInput from './ElemnetInput'
export default {
    data() {
        return {
            msg:'你好啊'
        };
    },
    components:{
        ElemnetInput
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
