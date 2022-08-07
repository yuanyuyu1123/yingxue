<template>
    <div>
        <h1>子组件B有{{money}}</h1>
        <button @click="giveParent(100)">给父100</button>
    </div>
</template>

<script>
import myMixin from './myMixin'
export default {
    mixins:[myMixin],
    data() {
        return {
            money:3000
        };
    },
    created() { },
    mounted() {
       
    },
    methods: {

    },
};
</script>

<style scoped lang="less"></style>

