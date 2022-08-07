//vue插件一定暴露一个对象
let myPlugin={}
//必须要有install方法
myPlugin.install=function(Vue,options){
    // console.log(Vue) //=>vue实例对象
    console.log(options)//{name: 'plugin'}。。可以拿到,Vue.use传的参
    //Vue.prototype.$bus:任何组件可以使用
    //Vue.directive(指令名,回调)：自定义指令
    //Vue.component(组件名,组件) :注册全局组件
    //Vue.filter..
    Vue.directive(options.name,(element,params)=>{
        //console.log(element);//<h1>黄嘉嘉</h1>
        //console.log(params);//对象  modifiers=>修饰符
        element.innerHTML=params.value.toUpperCase();
    })
}
export default myPlugin;
