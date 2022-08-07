<template>
    <div>
      -------------{{$store.state.home.number1}}
         我是Home
         {{number1}}---{{number2}}--{{total}}
   
        <h2 @click="changeNumber1(number1)">+{{number1}}</h2>

        <h2 @click="changeNumber2(number2)">+{{number2}}</h2>
        <hr>  
        <h1>{{number1}}</h1>
        <h2 @click="changeNumber1Action(number1)">+{{number1}}</h2>
        <h1>{{number2}}</h1>
        <h2 @click="changeNumber2Action(number2)">+{{number2}}</h2>
         <!--  三级联动全局组件已经注册为全局组件，因此不需要引入-->
        <TypeNav/>
        <!--列表-->
        <ListContainer />
        <!--今日推荐-->
        <TodayRecommend />
        <!-- 商品排行 -->
        <Rank />
        <!-- 猜你喜欢 -->
        <Like />
        <!--楼层-->
     

        <Floor v-for="floor in floorList" :key="floor.id" :floor="floor" />

        <!--商标-->
        <Brand />
<!-- 
        <button @click="add">点击我加1</button>
        仓库中的数字{{$store.state.count}}
         <button>点击我减1</button> -->
    </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/ListContainer'
  import Brand from '@/pages/Home/Brand/Brand'
  import Floor from '@/pages/Home/Floor/Floor'
  import Like from '@/pages/Home/Like/Like'
  import Rank from '@/pages/Home/Rank/Rank'
  import TodayRecommend from '@/pages/Home/TodayRecommend/TodayRecommend'

  import {mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
    components:{
      Brand,
      Floor,
      Like,
      ListContainer,
      Rank,
      TodayRecommend,
    },
    data() {
        return {

        };
    },
    computed:{
     ...mapState({
        floorList:(state)=>state.home.floorList,
        number1: state=>state.home.number1,
        number2: state=>state.home.number2,
      }),
  
      // ...mapGetters({
      //   total:'total'
      // }),
      ...mapGetters({
        total:'home/total'
      })
    },
    created() {
        console.log('1111111111'+ localStorage.getItem('NAME'))
        
    },
    mounted() {
         this.$store.dispatch('home/getFloorList')
          // //获取用户信息再
          // this.$store.dispatch('getUserInfo')
          
    },
    methods: {
      //  add(){
      //    //派发action
      //    this.$store.dispatch('add')
      //  }
      // ...mapMutations(['changeNumber1','changeNumber2']),
      // ...mapMutations({
      //   changeNumber1: 'home/changeNumber1',
      //   changeNumber2: 'home/changeNumber2'
      // }),
      changeNumber1(){
        console.log(22222)
        // localStorage.setItem('NAME','HHHHHHHHHHHHHHHH');
        this.$store.commit('home/changeNumber1',this.number1);
      },
    //    ...mapActions(['changeNumber1Action','changeNumber2Action']),
    //   ...mapActions({
    //     changeNumber1Action: 'home/changeNumber1Action',
    //     changeNumber2Action: 'home/changeNumber2Action'
    //  }),
      changeNumber1Action(){
          this.$store.dispatch('home/changeNumber1Action',this.number1)
      }
    }
};
</script>

<style scoped lang="less">

</style>
