module.exports = {
  //关闭eslint
  lintOnSave: false,
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度,默认false */
  productionSourceMap: false,
  //代理跨域
  devServer: {
    proxy: {
      //服务器和服务器之间没有跨域问题，前端是由浏览器，所以有跨域问题
      //有api向服务器发请求
      "/api": {
        target: "http://39.98.123.211",
        //真实接口中都带有api，所以路径不需要重写
        // pathRewrite: { '^/api': '' },
      },
    },
  },
};
