// 引入mockjs模块
import Mock from 'mockjs';
//把json数据格式引入进来
//json文件没对外暴露，但是可以直接引入
//webpack默认对外暴露的资源:图片、JSON数据格式
import banner from './banner.json';
import floor from './floor.json';


//第一个参数请求地址，第二个参数请求数据
Mock.mock('/mock/banner',{code:200,data:banner});
Mock.mock('/mock/floor',{code:200,data:floor});