// import Home from "@/pages/Home";
// const Home=()=>{
//   console.log('Home')//访问home页面时才执行
//   import('@/pages/Home')
// };
const Home=()=>import('@/pages/Home');
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";

//二级路由
import GroupOrder from "@/pages/Center/GroupOrder"
import MyOrder from "@/pages/Center/MyOrder"

/*
component: () => import('@/pages/Search')
1. import(modulePath): 动态import引入模块, 被引入的模块会被单独打包
2. 组件配置的是一个函数, 函数中通过import动态加载模块并返回,
    初始时函数不会执行, 第一次访问对应的路由才会执行, 也就是说只有一次请求对应的路由路径才会请求加载单独打包的js
作用: 用于提高首屏的加载速度


访问时才调用函数
*/


// 路由配置信息
export default [
  {
    name: "demo",
    path: "/demo",
    component: ()=>import('@/pages/Demo'),
    children:[
      {
        redirect:"communication",
        path: "",
      },
      {
        name: "communication",
        path: "communication",
        component: ()=>import('@/pages/Demo/Communication'),
      },
      {
        name: "vmodel",
        path: "vmodel",
        component: ()=>import('@/pages/Demo/Vmodel'),
      },
      {
        name: "sync",
        path: "sync",
        component: ()=>import('@/pages/Demo/Sync'),
      },
      {
        name: "attrlisteners",
        path: "attrlisteners",
        component: ()=>import('@/pages/Demo/AttrListeners'),
      },
      {
        name: "childrenparent",
        path: "childrenparent",
        component: ()=>import('@/pages/Demo/ChildrenParent'),
      },
      {
        name: "slot",
        path: "slot",
        component: ()=>import('@/pages/Demo/Slot'),
      }
    ]
  },
  {
    name: "center",
    path: "/center",
    component: Center,
    meta: {
      show: true,
    },
    // 二级路由
    children: [
      {
        path:'',
        redirect:'myorder',
      },{
        path: 'myorder',
        component: MyOrder
      },
      {
        path: 'grouporder',
        component: GroupOrder
      }
    ]
  },
  {
    name: "paysuccess",
    path: "/paysuccess",
    component: PaySuccess,
    meta: {
      show: true,
    },
  },
  {
    name: "pay",
    path: "/pay",
    component: Pay,
    meta: {
      show: true,
    },
    beforeEnter(to,from,next){
      console.log();
      console.log(from);
      if(from.path=="/trade"){
        next()
      }else{
        next(false);
      }
    }
  },
  {
    name: "trade",
    path: "/trade",
    component: Trade,
    meta: {
      show: true,
    },
    //路由独享守卫
    beforeEnter(to,from,next){
        if(from.path=='/shopcart'){
          next();
        }else{
          //停留在当前页面
          next(false);
        }
    }
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: ShopCart,
    meta: {
      show: true,
    },
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: {
      show: true,
    },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: {
      show: true,
    },
  },

  //重定向，在项目跑起来的时候，访问/。马上定向到首页
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    meta: {
      show: true,
    },
  },

  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: {
      show: true,
    },
    //面试题4:路由组件能不能传递props数据？
    //1、布尔值写法,props...只能传params
    // props:true
    //2、对象写法,额外给路由自己传递一些props
    // props:{
    //     a:1,
    //     b:2
    // }
    //3、函数写法，可以params参数、query参数，通过prop传递给路由组件(很少用)
    // props:($route)=>{
    //     return{
    //         keyword:$route.params.keyword,
    //         k:$route.query.k
    //     }
    // }
    props: ($route) => ({
      keyword: $route.params.keyword,
      k: $route.query.k
    }),
  },
  {
    path: "/login",
    component: Login,
    meta: {
      show: false,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      show: false,
    },
  },
];
