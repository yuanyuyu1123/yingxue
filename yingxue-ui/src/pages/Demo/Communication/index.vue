<template>
    <div>
        <h1>父组件--当前数字是{{nowNum}}</h1>
        <ChildA :msg="msg" :num="nowNum" @addClick="addNum" />
        <ChildB/>

    </div>
</template>

<script>
import ChildA from "./childA.vue"
import ChildB from "./childB.vue"
export default {
    data() {
        return {
            msg:'是父组件给子组件A传了数据',
            nowNum:10
        };
    },
    components:{
       ChildA,
       ChildB
    },
    created() {

    },
    mounted() {
    },
    methods: {
       addNum(num){
           this.nowNum=num
             console.log(num)
       }
    }
};
</script>

<style scoped lang="less">

</style>
