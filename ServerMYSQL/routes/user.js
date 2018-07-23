const jwt = require('jsonwebtoken')
const koaRouter = require('koa-router')
const userModel = require('../models/user.js')
const router = koaRouter()
router.post('/createUser', async (ctx) => {
  const data = ctx.request.body
  await userModel.findUserByName(data.user_name).then(async (result) => {
    if (result) {
      ctx.body = {
        code: -1,
        message: '用户名已经存在'
      }
    } else {
      let addReuslt = await userModel.createUser(data)
      if (addReuslt) {
        await userModel.findUserByName(data.user_name).then(async (result) => {
          if (result) {
            const userToken = {
              name: data.user_name,
              id: result.id
            }
            const token = jwt.sign(userToken, 'vue-koa-demo') // 签发token
            ctx.body = {
              success: true,
              name: result.user_name,
              id: result.id,
              token: token
            }
          }
        })
      }
    }
  })
})

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

module.exports = router
