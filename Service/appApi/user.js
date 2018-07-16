const jwt = require('jsonwebtoken')
const moment = require('moment')
const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()
router.post('/user', async (ctx) => {
  const User = mongoose.model('User')
  let userInfo = ctx.request.body
  await User.findOne({
    user_name: userInfo.user_name
  }).then(async (result) => {
    if (result) {
      const userToken = {
        name: userInfo.user_name,
        id: result.id
      }
      const secret = 'vue-koa-demo' // 指定密钥
      const token = jwt.sign(userToken, secret) // 签发token
      if (userInfo.passWord === result.password) {
        ctx.body = {
          success: true,
          name: userInfo.user_name,
          id: result.id,
          token: token // 返回token
        }
      } else {
        ctx.body = {
          code: 200,
          userInfo: null
        }
      }
    } else {
      ctx.body = {
        code: 501,
        userInfo: null
      }
    }
  })
})
router.post('/user1', async (ctx) => {
  const User = mongoose.model('User')
  let loginUser = ctx.request.body
  let userName = loginUser.user_name
  let passWord = loginUser.password
  await User.findOne({
    userName: userName
  }).then(async (result) => {
    if (result) {
      if (passWord === result.passWord) {
        ctx.body = {
          code: 200,
          userInfo: {userName: result.userName},
          success: true
          // token: createToken(userName)
        }
      } else {
        ctx.body = {
          code: 200,
          userInfo: null
        }
      }
    } else {
      ctx.body = {
        code: 501,
        userInfo: null
      }
    }
  })
})

module.exports = router
