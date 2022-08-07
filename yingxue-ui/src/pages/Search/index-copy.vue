<template>
    <div>
        <TypeNav/>
         我是Search
         <h1>我是params参数---{{$route.params.keyword}}===============keyword:{{keyword}}a:{{a}}b:{{b}}===k:{{k}}</h1>
          <h1>我是query参数---{{$route.query.k}}</h1>
    </div>
</template>

<script>
export default {
    //路由组件可以传递props
    props:['keyword','a','b','k'],
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
