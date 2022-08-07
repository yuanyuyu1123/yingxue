<template>
    <div>
        <router-link to="/demo/communication">组件通讯</router-link>
        <router-link to="/demo/Vmodel">v-model</router-link>
        <router-link to="/demo/sync">sync</router-link>
        <router-link to="/demo/attrlisteners">$attrs/$listeners</router-link>
        <router-link to="/demo/childrenparent">$children/$parent</router-link>
         <router-link to="/demo/slot">slot</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
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
a{
    display: inline-block;
    padding: 10px 20px;
    font-size: 24px;
    
}
</style>
