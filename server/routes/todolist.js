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
    console.log(JSON.stringify(result))
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

router.delete('/todolist/:userId/:id', async (ctx) => {
  let loginUser = ctx.request.body
  await todolistModel.removeTodolist(loginUser.id, loginUser.userId).then(() => {
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
// router.delete('/todolist/:userId/:id', api.removeTodolist)
router.put('/todolist/:userId/:id/:status', async (ctx) => {

})

module.exports = router
