import {reqGetCode,reqUserRregister,reqUserLogin,reqUserInfo,reqLogout} from '@/api'
import {setToken,getToken,removeToken} from '@/utils/token'
// 登录注册
const state={
    code:'',
    token:getToken(),
    userInfo:{}
};
const mutations={
    GETCODE(state,code){
          state.code=code;
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    //清除本地数据
    CLEAR(state){
        state.token='';
        state.userInfo={};
        removeToken();
    }
};
const actions={
    //获取验证码
    async getCode({commit},phone){
        //把验证码返回，但是正常是后台发手机上
        let result =await reqGetCode(phone);
        if(result.code==200){
            commit('GETCODE',result.data);
        }else {
            return Promise.reject(new Error('fail'));
        }
    },
    // 用户注册
    async userRregister({commit},user){
        let result =await reqUserRregister(user);

        if(result.code==200){
            return 'ok';
        }else {
            return Promise.reject(new Error('fail'));
        }
    },
    //用户登录业务【token】
    async userLogin({commit},user){
        let result =await reqUserLogin(user);
        //token--用户的唯一标识。。将来经常用token找服务器拿用户信息进行展示
        if(result.code==200){
            //登录成功获取到token,要持久化token
            setToken(result.data.token)
            commit('USERLOGIN',result.data.token)
            return 'ok';
        }else {
            return Promise.reject(new Error('fail'));
        }
    
    },
    //获取用户信息 
    async getUserInfo({commit}){
        let result = await reqUserInfo(); 
        // console.log('getUserInfo',result)
        if(result.code==200){
            commit('GETUSERINFO',result.data)
            return 'ok';
        }else {
            return Promise.reject(new Error('fail'));
        }
    },
    //退出请求
    async userLogout({commit}){
        //只是向服务器发请求，通知服务器清除token
        let result = await reqLogout();
        console.log(result)
        if(result.code==200){
            //actions中不能修改state,只能mutations中修改
            commit('CLEAR');
            return 'ok';
        }else {
            return Promise.reject(new Error('fail'));
        }
    
    }
};
const getters={};
export default {
    state,mutations,actions,getters
}