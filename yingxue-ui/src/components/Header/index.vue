<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <!-- 未登录 -->
          <p v-if="!userName">
            <span>请</span>
            <!-- 声明式导航：务必要有to属性 -->

            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <!-- 登录 -->
          <p v-else>
            <a>{{ userName }}</a>
            <a  class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的订单</router-link> 
          <router-link to="/shopcart">我的购物车</router-link> 
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
            @keydown.enter="goSearch"
          />
          <input hidden />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    //用户名信息
    userName() {
      return this.$store.state.user.userInfo.name;
    },
  },
  created() {},
  mounted() {
    //通过全局事件总线清除关键字
    this.$bus.$on("clear", () => {
      this.keyword = "";
    });
  },
  methods: {
    //向search路由进行跳转
    goSearch() {
      //路由传参
      //1、字符串形式
      //  this.$router.push('/search/'+this.keyword+'?k='+this.keyword.toUpperCase());
      //2、模板字符串
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`);
      //3、对象，传的是对象，路由跳转传参params参数，需要给路由命个名
      // this.$router.push({name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}});

      //面试题1、路由传递参数（对象写法）path是否可以结合params参数一起使用？=====>
      //答：路由跳转传参的时候，对象的写法可以是name、path形式，但是path的写法不可以和params参数一起使用。（路径参数缺失是无法匹配path里面的占位符）
      //传params-->对象写法，要是name的写法
      // this.$router.push({
      //   path:'/search',
      //   params:{keyword:this.keyword},
      //   query:{k:this.keyword.toUpperCase()}
      // });
      /************************************************** */
      // 面试题2：如何指定params参数可以不传？
      /*
            问题：配置路由的时候，已经占位了（params参数），但是路由跳转的时候就不传递
            真实：http://localhost:8080/#/?k=HHH
            应该是的：http://localhost:8080/#/search/?k=HHH
            
            */
      //如果路由要求传params参数，但是你没传params参数，发现url会有问题
      //如何指定params可以传递或者不传递，解决。配置路由时，可以在占位符后面加个问号【问号代表可传或不传，正则的问号一次或多次】===> path:'/search/:keyword?',
      //http://localhost:8080/#/search?k=HHH
      // this.$router.push({
      //   name:'search',
      //   // params:{keyword:this.keyword},
      //   query:{k:this.keyword.toUpperCase()}
      // });
      //面试题3:params参数可以传递可以不传递，但是如果传递为空字符串，如何解决？
      //http://localhost:8080/#/?k=DD  路径没有/search
      //使用undefined解决：params参数可以传递，或不传递(传空字符串)
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: ""||undefined },
      //   query: { k: this.keyword.toUpperCase() },
      // });
      //面试题4:路由组件能不能传递props数据？
      //可以的，三种写法
      //  this.$router.push({
      //     name: "search",
      //     params:{keyword:this.keyword},
      //     query: { k: this.keyword.toUpperCase() },
      //   });

      // this.$router.push(
      //   {
      //     name: "search",
      //     params: { keyword: this.keyword },
      //     query: { k: this.keyword.toUpperCase() },
      //   },
      //   () => {},
      //   (error) => {
      //     console.log(error)
      //   }
      // );

      this.$router.push({
        name: "search",
        //  path:'/search',
        params: { keyword: this.keyword || undefined },

        // query: { k: this.keyword.toUpperCase() },
        query: this.$route.query,
      });
    },
    //退出登录
    async logout(){
      //1、发请求，通知服务器
      //2、清除项目当中的数据【userInfo,token】
      try{
        //退出成功，回到首页
       await this.$store.dispatch('userLogout');
       this.$router.push('/home')
      }catch(error){

      }
  
    }
  },
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
