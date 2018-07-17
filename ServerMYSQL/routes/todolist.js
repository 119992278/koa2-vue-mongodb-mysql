const api = require('../controllers/todolist.js')
const checkToken = require('../jwt/checkToken')
const koaRouter = require('koa-router')
const todolistModel = require('../models/todolist.js')
const router = koaRouter()
router.get('/', async (ctx) => {
  ctx.body = {
    success: true,
    result: 'tkoen过期,请重新登录.'
  }
})
// 查询
router.get('/todolist/:id', checkToken, async (ctx) => {
  await todolistModel.getTodolistById(ctx.params.id).then(async (result) => {
    ctx.body = {
      success: true,
      result
    }
  })
})

// 插入
router.post('/todolist', async (ctx) => {
  let loginUser = ctx.request.body
  let newList = {
    'user_id': loginUser.id,
    'content': loginUser.content,
    'status': loginUser.status
  }
  await todolistModel.createTodolist(newList).then(() => {
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
// 删除
router.delete('/todolist/:userId/:id', async (ctx) => {
  await todolistModel.removeTodolist(ctx.params.userId, ctx.params.id).then(() => {
    ctx.body = {
      code: 200,
      message: '删除成功.'
    }
  }).catch(error => {
    ctx.body = {
      code: 500,
      message: error
    }
  })
})
router.put('/todolist/:userId/:id/:status', async (ctx) => {
  await todolistModel.updateTodolist(ctx.params.userId, ctx.params.id, ctx.params.status).then(() => {
    ctx.body = {
      code: 200,
      message: '更新成功.'
    }
  }).catch(error => {
    ctx.body = {
      code: 500,
      message: error
    }
  })
})

module.exports = router
