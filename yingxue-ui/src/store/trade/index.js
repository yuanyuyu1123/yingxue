import {redFindUserAddressList,redOrderInfo} from '@/api'
const state={
    address:[],
    orderInfo:{}
};
const mutations={
    GETUSERADDRESS(state,address){
        state.address=address
    },
    GETODERINFO(state,orderInfo){
        state.orderInfo=orderInfo
    }
};
const actions={
    //获取用户地址
   async getUserAddress({commit}){
        let result=await redFindUserAddressList();
        if(result.code==200){
            commit('GETUSERADDRESS',result.data)
        }
   },
   //获取商品清单信息
   async getOrderInfo({commit}){
    let result=await redOrderInfo();
    if(result.code==200){
        commit('GETODERINFO',result.data)
    }
  },
};
const getters={};

export default {
    state,mutations,actions,getters
}