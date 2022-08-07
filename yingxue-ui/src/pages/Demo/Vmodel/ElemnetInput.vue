<template>
    <div>
        <!-- 
            :value：动态属性
            @input:原生dom事件 -->
          <input type="text" :value="value" @input="$emit('input',$event.target.value)">  {{value}}
    </div>
</template>

<script>
export default {
    props:['value'],
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
