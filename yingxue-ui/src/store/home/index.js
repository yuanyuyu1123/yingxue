import { reqBannerList, reqCategoryList,reqFloorList } from "@/api";
//home模块小仓库
const state = {
  //statec初始值不能瞎写，服务器返回的是数组就是数据，根据接口返回值初始化
  categoryList: [],
  bannerList: [],
  floorList: [],
  number1:1,
	number2:2
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
  changeNumber1(state, val){
    state.number1 += val
  },
  changeNumber2(state, val){
      state.number2 += val
  },
};
const actions = {
  //通过api里面的接口函数调用，向服务器发请求，获取服务器数据
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    // console.log('HEHEHHEHEEEEEEEEEEEE');
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
      //  throw new Error('错误')
    } 
  },
  //获取首页轮播图数据
  async getBannerList({ commit }) {
    let result = await reqBannerList();
    // console.log(result.data)
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  //获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      commit("GETFLOORLIST", result.data);
    }
  },
  changeNumber1Action(context,val){
    context.commit('changeNumber1',val);
  },
  changeNumber2Action(context,val){
      context.commit('changeNumber2',val);
  }
};
const getters = {
  total(state){
    console.log(state.number1+state.number2)
    return state.number1+state.number2
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
