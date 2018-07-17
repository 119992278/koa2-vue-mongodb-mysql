const jwt = require('jsonwebtoken')
const koaRouter = require('koa-router')
const userModel = require('../models/user.js')
const router = koaRouter()
// router.get('/user/:id', auth.getUserInfo) // 定义url的参数是id
router.post('/user', async (ctx) => {
  const data = ctx.request.body
  await userModel.findUserByName(data.user_name).then(async (result) => {
    if (result) {
      const userToken = {
        name: result.user_name,
        id: result.id
      }
      const secret = 'vue-koa-demo' // 指定密钥
      const token = jwt.sign(userToken, secret) // 签发token
      if (data.passWord === result.password) {
        ctx.body = {
          success: true,
          name: result.user_name,
          id: result.id,
          token: token
        }
      } else {
        ctx.body = {
          success: false,
          info: '密码错误'
        }
      }
    } else {
      ctx.body = {
        success: false,
        info: '用户不存在！'
      }
    }
  })
})
router.post('/user1', async (ctx) => {
  const data = ctx.request.body
  const userInfo = await userModel.findUserByName(data.user_name)
  if (userInfo != null) {
    if (data.passWord === userInfo.password) {
      ctx.body = {
        success: false,
        info: '正确！'
      }
    } else {
      ctx.body = {
        success: false,
        info: '密码错误'
      }
    }
  } else {
    ctx.body = {
      success: false,
      info: '用户不存在！'
    }
  }
})
module.exports = router
