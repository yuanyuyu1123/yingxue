<template>
    <div>
      <childA>
           <span> 我是默认插槽</span>
      </childA>    

      <childB>
          <span slot="left">自定义左边的内容</span>
	      <span slot="right">自定义右边的内容</span>
      </childB>  

      <!-- 子组件：数据来源于父组件 -->
      <List :todos="todos">
          <!-- 子组件决定不了结构和外观 -->
          <!-- slot-scope="{todo}"  接收回传的数据,{}是解构 -->
          <template slot-scope="{todo}">

              <span :style="{color:todo.isComplete?'red':''}">{{todo.text}}</span>
          </template>
      </List>

        <List2 :todos="todos">
          <!-- 子组件决定不了结构和外观 -->
          <!-- slot-scope="{todo}"  接收回传的数据,{}是解构 -->
          <template slot-scope="{todo,$index}">
                
              <span :style="{color:todo.isComplete?'red':''}">{{$index}}------{{todo.text}}</span>
          </template>
      </List2>
    </div>
</template>

<script>
import childA from './childA'
import childB from './childB'
import List from './List'
import List2 from './List2'
export default {
    data() {
        return {
           todos:[
               {id:1,text:'AAA',isComplete:false},
               {id:2,text:'BBB',isComplete:true},
               {id:3,text:'ccc',isComplete:true},
               {id:4,text:'ddd',isComplete:false},
           ]
        };
    },
    components:{
        List,List2,childA,childB
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
