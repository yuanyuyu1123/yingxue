import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'
//封装游客身份模块uuid-->生成一个随机字符串（不能再变）
import {gueUUID} from '@/utils/uuid_token'
const state={
    goodsInfo:{},
    //游客临时身份
    uuid_token:gueUUID()
}
const mutations={
    GETGOODSINFO(state,goodsInfo){
           state.goodsInfo=goodsInfo
    }
}
const actions={
    //获取产品信息
    async getGoodsInfo({commit},skuId){
        let result=await reqGoodsInfo(skuId);
        if(result.code==200){//提交mutations。修改state
            commit('GETGOODSINFO',result.data);
        }
    },
    //产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}){   
        //加入购物车返回的结果 
        //服务器写入数据成功，并没有返回其他数据，所以不需要三连环存储数据
        let result=await reqAddOrUpdateShopCart(skuId,skuNum);
        //当前这个函数如果执行返回的是个promise 要么成功，要么失败
        if(result.code==200){//成功
             return "ok"
         }else{//加入购物车失败
            return Promise.reject(new Error('faile'))
         }
    }
}
const getters={
    // 路径导航简化
    categoryView(state){
        //console.log(state)//会执行两次，第一次state.goodsInfo是空对象
        //state.goodsInfo初始状态是空对象，空对象的.categoryView是undefined。。所以报错。。解决state.goodsInfo.categoryView||{}
       return state.goodsInfo.categoryView||{};
    },
    // 产品信息简化数据
    skuInfo(state){
        return state.goodsInfo.skuInfo||{};
    },
    //售卖属性简化
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||[];
    }
}
export default {
    state,mutations,actions,getters
}