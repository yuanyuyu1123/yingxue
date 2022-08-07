//当前这个模块:AIP进行统一管理
import requests from "./request";
import mockRequests from './mockAjax'
//三级联动的接口
// /api/product/getBaseCategoryList  get 无参数
    //发请求:axios发请求，返回的是Promise对象
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'})

//获取banner
export const reqBannerList=()=>mockRequests({url:'/banner',method:'get'})
//获取floor
export const reqFloorList=()=>mockRequests({url:'/floor',method:'get'})

//获取搜索模块
/*
 {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}

 */
//post 请求是data get请求是params
//params至少应该是个空对象
export const reqGetSearchInfo=(params)=>requests({url:'/list',method:'post',data:params});

//获取产品详情信息的接口  url:/api/item/{ skuId }   请求方式:
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${ skuId }`,method:'get'});

//将产品添加到购物车中（获取更新某个产品的个数）
///cart/addToCart/{skuId}/{skuNum} POST
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

//获取购物车列表数据接口  /api/cart/cartList   GET
export const reqCartList =()=>requests({url:'/cart/cartList ',method:'get'});

//删除购物车商品  /api/cart/deleteCart/{skuId}  DELETE
export const reqDeleteCartById =(skuId)=>requests({url:`/cart/deleteCart/${skuId} `,method:'delete'});
//切换商品选中状态  请求地址:/api/cart/checkCart/{skuID}/{isChecked}    get
export  const reqUpdateCheckedById=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked} `,method:'get'})
//获取验证码  /api/user/passport/sendCode/{phone}  get
export  const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//注册/api/user/passport/register  get
export  const reqUserRregister=(data)=>requests({url:'/user/passport/register',method:'post',data:data})
//登录  /api/user/passport/login  post
export  const reqUserLogin=(data)=>requests({url:'/user/passport/login',method:'post',data})
//获取用户信息 需要带用户的token     /api/user/passport/auth/getUserInfo  get
export  const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出请求  /api/user/passport/logout  get
export  const reqLogout=()=>requests({url:'/user/passport/logout',method:'get'})
//获取用户地址信息 /api/user/userAddress/auth/findUserAddressList get
export  const redFindUserAddressList=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
//获取订单交易页信息  /api/order/auth/trade   get
export  const redOrderInfo=()=>requests({url:'/order/auth/trade',method:'get'})

//提交订单 /api/order/auth/submitOrder?tradeNo={tradeNo} post
export  const redSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data})

//获取订单支付信息  /api/payment/weixin/createNative/{orderId}  get
export  const redPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//查询支付订单状态  /api/payment/weixin/queryPayStatus/{orderId}  GET

export  const redPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})


//获取我的订单列表 /api/order/auth/{page}/{limit} get

export  const redMyOrderList=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})

