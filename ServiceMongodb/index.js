const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const serve = require('koa-static')
const path = require('path')
const historyApiFallback = require('koa-history-api-fallback')
console.log('env.NODE_ENV=' + process.env.NODE_ENV)
console.log('================启动mongodb数据库');
(async () => {
  const {connect, initSchemas} = require('./database/init.js')
  connect()
  initSchemas()
})()

let user = require('./appApi/user.js')
let todolist = require('./appApi/todolist.js')
let test = require('./appApi/testAPI.js')
app.use(bodyParser()) // 解析POST请求
app.use(cors()) // 设置代理
let router = new Router() // 装载所有子路由
router.use('/auth', user.routes())
router.use('/api', todolist.routes())
router.use('/test', test.routes())
app.use(router.routes()) // 加载路由中间件
app.use(router.allowedMethods())
app.use(historyApiFallback()) // 防止页面刷新后,前端路由失效.
app.use(serve(path.resolve('../dist')))  // 把webpack打包的前端页面作为静态资源托管.

app.listen(8889, () => {
  console.log('[Server] starting at http://localhost:8889/')
})
