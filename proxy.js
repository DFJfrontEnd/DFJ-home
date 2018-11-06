/**
 * 后台请求接口代理文件
 */
module.exports = {
  '/api': {
    target: 'http://120.78.251.192:8080', //被代理转发到的请求地址
    changeOrigin: true,  //设置这个参数可以避免跨域
    pathRewrite: {
      '/api': '/api'
    }
  }
}

