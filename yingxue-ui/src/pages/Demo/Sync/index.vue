<template>
    <div>
          <h4>一共是{{money}}元</h4>
          <!-- 不使用sync修饰符 -->
          <childA :money="money" @update="money=$event"/>  
          <!--  @update:money  绑定的自定义事件，名字叫update:money -->
          <childB :money="money" @update:money="money=$event"/>  
          <!-- 使用sync修饰符 -->
          <!-- 
              :money.sync
              1、父组件给子组件传了props:monry
              2、当前子组件绑定了一个自定义事件，且事件名称为update:money
           -->
          <childB :money.sync="money" />   
    </div>
</template>

<script>
import childA from './childA'
import childB from './childB'
export default {
    data() {
        return {
             money:1000,

        };
    },
      components:{
        childA,
        childB
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
