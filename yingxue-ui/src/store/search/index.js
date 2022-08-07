import {reqGetSearchInfo} from '@/api'
//state模块小仓库
const state={
    searchInfo:{}
};
const mutations={
    GETSEARCHINFO(state,searchInfo){
        state.searchInfo=searchInfo;
    }
};
const actions={
    //获取搜索模块
    async getSearchInfo({commit},params={}){
        //params默认是个空对象
        let result = await reqGetSearchInfo(params);
        // console.log(result.data);
        if(result.code==200){
            commit("GETSEARCHINFO",result.data)
        }
    }
};
// 计算属性，在项目当中，为了简化数据而生
const getters={
    goodsList(state){//state,当前仓库中的state
        //请求发不出去的话 searchInfo={},会有问题，state.searchInfo.goodsList这个值会是undefined
         return state.searchInfo.goodsList||[]
    },
    attrsList(state){
        return state.searchInfo.attrsList||[]
    },
    trademarkList(state){
        return state.searchInfo.trademarkList||[]
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}