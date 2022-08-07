import {reqCartList,reqDeleteCartById,reqUpdateCheckedById} from '@/api'
const state={
    cartList:[]
}
const mutations={
    GETCARTLIST(state,cartList){
          state.cartList=cartList;
    }
};
const actions={
    //获取购物车列表
    async getCartList({commit}){
          let result=await reqCartList();
          if(result.code==200){
            commit('GETCARTLIST',result.data)
          }
    },
     //删除购物车某1个商品
    async deleteCartListBySkuId({commit},skuId){
        let result=await reqDeleteCartById(skuId);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    //修改购物车某个商品选中状态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result=await reqUpdateCheckedById(skuId,isChecked);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    //删除全部勾选产品
    deleteAllCheckedCart({dispatch,getters}){
      //context:小仓库，commit【提交mutation修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
      let PromiseAll=[]
      getters.cartList.cartInfoList.forEach( item=> {
          //返回的是'deleteCartListBySkuId'的返回值
          //所以有几次返回几个promise
          if(item.isChecked==1){
          let promise=dispatch('deleteCartListBySkuId',item.skuId);
          //将每次返回的Promise添加到数组中
          PromiseAll.push(promise)
          }

        
          
      });
        //Promose.all([p1,p2,p3])-p1|p2|p3都是promise
        //只要p1,p2,p3...全部的都成功，返回结果即为成功,返回是个数组如：['ok', 'ok']，如果有个失败，返回即为失败结果
        return Promise.all(PromiseAll);
    },
    //修改全部产品状态
    updateAllCartIsChecked({dispatch,getters},isChecked){
        console.log(state.cartList)
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach((item)=>{
            if(item.isChecked!=isChecked){
                let promise=dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
                PromiseAll.push(promise);
            }
            
        })
        return Promise.all(PromiseAll);
    }
};
const getters={
    cartList(state){
        return state.cartList[0]||{}
    }
};

export default {
    state,mutations,actions,getters
}
