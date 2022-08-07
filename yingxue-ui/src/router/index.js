//1\引入路由
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
//引入store
import store from "@/store"
//2、使用插件
 Vue.use(VueRouter);


//先把VueRouter原型对象的push，先保存下
let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;
//重写push|replace
//第一个参数：原来的push方法，你往哪里跳（传递参数）
//第二个参数：成功回调
//第三个参数：失败回调
VueRouter.prototype.push=function(location,resolve,reject){
  if(resolve|reject){
      //call|apply:都可以调用函数一次，改变改变上下文一次
      //不同点：call和apply传递参数不同，call用逗号隔开，apply传递数组
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}

VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve|reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
  }

 //引入路由组件
 const router= new VueRouter({
     //配置路由
     routes,
     //滚动行为
     scrollBehavior(to, from, savedPosition) {
      // 始终滚动到顶部
      return { y: 0 }
    }
 })
 //全局前置守卫--在路由跳转之前判断
 router.beforeEach(async (to,from,next)=>{
  //to：要跳转路由的信息
  //from:从哪个路由跳来的信息
  //next:放行函数  next()放行   next(path)放行到指定路由    next(false)
  //测试先都放行
  // next();
  //用户登陆了，才会有token,未登录一定不会有token
  let token = store.state.user.token;
  //用户信息
  let name=store.state.user.userInfo.name;

  // console.log(token,to.path,to.path=='/login')
  //已经登录,
  if(token){
     //已登录不可以去login.停留在首页
      if(to.path==='/login'){
        next('/');
      }else{
        //登录，但是不是去login,【home|detail|search】..
        //如果用户名有
        if(name){
          next()
        }else{
          //没有用户信息，要派发action。获取用户信息再首页展示
          try{
            //获取用户信息成功
            await store.dispatch('getUserInfo');
            next()
          }catch(error){
            //有tokrn,但是没用户信息,又请求没拿到用户信息----->token过期
            //清除token
            await store.dispatch('userLogout');
            next('/login');
          }

        }
      }
  }else{//未登录没有处理完毕
    //没登录，不能去交易相关【trade】、不能去支付相关【Pay|PaySuccess】，不能去个人中心【center】
    //为登录去上面这些页面，应该要去---->登录
    // console.log('1111111')
    let toPath=to.path;
    if(toPath.indexOf('/trade')!==-1||toPath.indexOf('/pay')!==-1||toPath.indexOf('/center')!==-1){
      //场景：原来想去【我的订单:/trade】，但是没有登录，去不得了，登录的后，应该要去【我的订单:/trade】,而不是去首页
      //套路：把未去的信息放在query参数
      next('/login?redirect='+toPath);
    }else{
      next();
      //不是去上面这些页面，可以去----->首页
    }

  }
 })
 //导出使用
 export default router
