'use strict'

module.exports = (option, app) => {
  return async function (ctx, next) {
    await next()
    // console.log('测试中间件')
    // console.log(ctx)
    var url_list = String(ctx.request.url).split('?')
    console.log('******************************************************下面是一条新的日志******************************************************')
    console.log('*****************************************请求的log日志*****************************************')
    console.log('请求的路由：' + String(url_list[0]) + '，请求的方法：' + String(ctx.request.method) + '，状态码：' + String(ctx.response.status))
    console.log(url_list)
    console.log('*****************************************headers 头信息*****************************************')
    console.log(ctx.request.header)
    console.log('*****************************************请求的参数*****************************************')
    console.log('GET参数：',ctx.query)
    console.log('POST参数：',ctx.request.body)
  }
}