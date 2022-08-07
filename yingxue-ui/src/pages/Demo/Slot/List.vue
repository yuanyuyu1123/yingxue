<template>
    <div>
           <ul>
               <!-- 数据来源于父组件 -->
               <li v-for="(item,index) in todos" :key="item.id">
                       <!-- 作用域插槽，子组件将数据回传父组件 -->
                       <slot :todo="item">

                       </slot>
               </li>
           </ul>
    </div>
</template>

<script>
export default {
    props:['todos'],
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
