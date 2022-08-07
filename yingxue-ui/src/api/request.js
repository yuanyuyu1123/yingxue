//对axios进行二次封装
import axios from "axios";
//在当前模块中引入store
import store from "@/store";
//引入进度条。。看文档
import nprogress from "nprogress";
//要引入进度条样式
import "nprogress/nprogress.css"
// nprogress  start 进度条开始。done进度条结束

//1、利用axios对象的方法create,去创建一个axios实例
const requests =axios.create({
    //配置对象
    //基础路径，requests发出的请求在端口号后面会跟改baseURl
    baseURL:"/api",
    //代表请求超时的时间5s
    timeout:5000,
})
//请求拦截器，在请求发出之前做些事情
requests.interceptors.request.use((config)=>{

    if(store.state.detail.uuid_token){
       //给请求头添加一个字段(userTempId)：和后台老师商量好的
       config.headers.userTempId=store.state.detail.uuid_token

    }
    //需要携带token给服务器
    if(store.state.user.token){
        config.headers.token=store.state.user.token
    }
   //config:配置对象，对象里面有个属性很重要，header请求头
   //进度条开始
   nprogress.start();
   return config
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功回调函数，服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    //进度条结束
    nprogress.done();
    return res.data
},(error)=>{
    //响应失败回调函数，如终结Promise链
    return Promise(new Error('fail'));
})


//对外暴露
export default requests;