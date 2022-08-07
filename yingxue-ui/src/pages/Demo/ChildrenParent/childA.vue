<template>
    <div>
        <h1>子组件A有{{money}}</h1>
        <button @click="giveParent(50)">给父50</button>
         <button @click="giveParent2(300)">给父300</button>
    </div>
</template>

<script>
import myMixin from './myMixin'
export default {
    mixins:[myMixin],
    data() {
        return {
            money:2000
        };
    },
    created() { },
    mounted() {
       
    },
    methods: {
        giveParent2(money){
           this.money-=money;
           this.$parent.money+=money;
        }
        
    },
};
</script>

<style scoped lang="less"></style>

