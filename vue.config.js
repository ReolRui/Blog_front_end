module.exports = {
    // 已省略其他配置项
   devServer: {
     proxy: {
       '/api': {//业务类的接口请求地址，这里的api可以是后端的工程名
         changeOrigin: true,
         target: 'http://127.0.0.1:3000/'
       },
       '/': { //websoket请求接口地址
         ws: true,
         target: 'ws://127.0.0.1:3000/'
       }
     }
   }
  
}