<template>
    <div>
          <h1>我是子组件B---{{num}}</h1>       
          <button @click="$bus.$off('addClick')">移除$bus addClick</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
          num:0
        };
    },
    created() {

    },
    mounted() {
       this.$bus.$on('addClick',(num)=>{
           this.num=num
           console.log('B组件监听到了addClick 通过$bus'+num)
       }) 
    },
    methods: {
      removeBusAddClick(){//没反应
           this.$bus.$off('addClick','');
      }
    }
};
</script>

<style scoped lang="less">

</style>
