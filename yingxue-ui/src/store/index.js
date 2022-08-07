import Vue from "vue";
import Vuex, { Store } from "vuex";
//需要使用插件
Vue.use(Vuex);

/*
//state:仓库存储数据的地方
const state={
    count:1
};
//mutation:修改state的唯一手段
const mutations={
    ADD(state){
        state.count++
    }
};
//action:处理action，书写自己的业务逻辑，也可以处理异步
const actions={
    //这里可以写业务逻辑，但是不能直接修改state
    add({commit}){
        commit("ADD")
    }
};
//getter:理解为计算属性，用于简化仓库数据，让组件获取仓库属性横加方便
const getter={}
//对外暴露Store类的一个实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
   getter
})
*/

//模块化开发

//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
//对外暴露Store类的一个实例
export default new Vuex.Store({
   
      modules:{
        
        home,
        search,
        detail,
        shopcart,
        user,
        trade
      }
})