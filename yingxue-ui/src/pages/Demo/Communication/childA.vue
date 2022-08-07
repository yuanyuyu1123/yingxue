
<template>
    <div>
        <h1>我是子组件A</h1>
        <h1>接收父组件传递过来的数据msg-----{{ msg }}</h1>
        <button @click="add">加1</button>
    </div>
</template>

<script>
export default {
    // props:['msg'],
    props: {
        msg: {
            type: String,
            default: "",
        },
        num: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {};
    },
    created() { },
    mounted() {
        this.$on("addClick", (num) => {
            console.log("ChildA监听到了addClick" + num);
        });
    },
    methods: {
        add() {
            let num = 1 + this.num;
            this.$emit("addClick", num);
            this.$bus.$emit("addClick", num + 3);
        },
    },
};
</script>

<style scoped lang="less"></style>