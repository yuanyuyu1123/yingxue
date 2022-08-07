<template>
    <div>
          花了<button @click="$emit('update',money-20)">20</button> 还剩{{money}}
    </div>
</template>

<script>

export default {
    props:['money'],
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
