const moment = require('moment')
const Router = require('koa-router')
const mongoose = require('mongoose')
const checkToken = require('../jwt/checkToken')
let router = new Router()
router.get('/', async (ctx) => {
  ctx.body = {
    success: true,
    result: 'tkoen过期,请重新登录.'
  }
})

// 查询
router.get('/todolist/:id', checkToken, async (ctx) => {
  const todolist = mongoose.model('Todolist')
  const id = ctx.params.id // 获取url里传过来的参数里的id
  const result = await todolist.find({
    user_id: id
  }).exec()
  ctx.body = {
    success: true,
    result
  }
})

// 插入
router.post('/todolist', async (ctx) => {
  const List = mongoose.model('Todolist')
  let loginUser = ctx.request.body
  let newList = new List({
    'user_id': loginUser.id,
    'content': loginUser.content,
    'status': loginUser.status
  })
  await newList.save().then(() => {
    let newList = ''
    ctx.body = {
      code: 200,
      message: '插入成功.'
    }
  }).catch(error => {
    ctx.body = {
      code: 500,
      message: error
    }
  })
})

// 更新
router.put('/todolist/:userId/:id/:status', async (ctx) => {
  const List = mongoose.model('Todolist')
  const id = ctx.params.id
  const userId = ctx.params.userId
  let status = ctx.params.status
  status === 'false' ? status = true : status = false
  const success = await List.update({
    _id: id,
    user_id: userId
  }, {
    $set: {
      status
    }
  })
  ctx.body = {
    success
  }
})

// 删除
router.delete('/todolist/:userId/:id', async (ctx) => {
  const List = mongoose.model('Todolist')
  const id = ctx.params.id
  const userId = ctx.params.userId
  let success = await List.remove({
    _id: id,
    user_id: userId
  })
  ctx.body = {
    success
  }
})

module.exports = router
