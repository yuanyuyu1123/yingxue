import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
import {MessageBox,Button} from 'element-ui';
//第一个参数：全局组件的名字。第二个参数：哪个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
//ElementUI注册组件，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.use(Button);
//引入路由
import router from '@/router'
//引入仓库
import store from './store';
//测试
// import {reqCategoryList} from '@/api'
// reqCategoryList()

Vue.config.productionTip = false

//引入mockServer.js----moc数据
import '@/mock/mockServer'

//引入swiper样式
import 'swiper/css/swiper.css'



//统一接收api 文件全部的请求函数
//统一引入
import * as API from '@/api'

import loadImg from '@/assets/1.jpg'
//require('@/assets/1.jpg')
//引入插件
import VueLazyload from 'vue-lazyload'
 //注册组件
Vue.use(VueLazyload,{
  //懒加载默认图片
  loading: require('@/assets/1.jpg'),
})



//引入自定义插件
//use安装插件，会调用install===>不是自己调用install,是注入一个参数Vue
import myPlugin from '@/plugins/myPlugin'


//引入表单验证
import '@/plugins/validate'
Vue.use(myPlugin,{
  name:'upper'
});



new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;//this=>VM
    // console.log(this)
    //所有的API挂载在了$API
    Vue.prototype.$API=API;
 },
  //注册路由信息：这两书写router的时候。组件身上拥有$router、$route
  router,
  //注册仓库，组件实例身上会多了一个个属性 $store
  store,
}).$mount('#app')
let a=2;