<template>
    <div>
        <h1>父--有{{money}}元</h1>
        <ChildA/>
        <ChildB/>

    </div>
</template>

<script>
import ChildA from "./childA.vue"
import ChildB from "./childB.vue"
export default {
    data() {
        return {
            money:1000
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
