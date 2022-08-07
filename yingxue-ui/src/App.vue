<template>
  <div id="app">
    <h1 v-upper.hh="msg">黄嘉嘉</h1>
    <h1 v-upper="'lll'"></h1>
    <button @click="jumpRouter">点击啊阿嘉嘉嘉嘉</button>
    <Header> </Header>
     <!--路由出口的地方  -->
     <!-- <router-link to="/home">Home</router-link>
     <router-link to="/serch">serch</router-link> -->

    <router-view></router-view>
    <!-- Home、Search显示。Login、Register 隐藏-->
    <!-- 1、通过$route.path判断路径 -->
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
        <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name: 'App',
  data(){
    return{
      msg:'hhh'

    }
  },
  components: {
         Header,
         Footer
  },
  mounted(){
       //通知Vue发请求，获取数据，存储仓库中,获取三级列表的数据，放在根组件，为了请求只执行一次
       //可以放在mian.js中吗？不可以,this是undefined，只有组件身上才有$store..mian.js不是一个组件
      //  console.log(this)//====当前组件
      // this.$store.dispatch("home/categoryList");
     this.getcategoryList();

     
  },
  methods:{
    jumpRouter(){
       this.$router.push({ path: '/demo/vmodel' })
    },
     async getcategoryList(){
        try {
           await this.$store.dispatch("home/categoryList");
            //  console.log('哈哈哈哈哈哈哈');
        } catch (error) {
            //加入购物车失败的事，如
            console.log(error.message)
            // alert(error.message)
        }
         
    }
  }
}
</script>

<style >

</style>
