const koaRouter = require('koa-router')
const db = require('../config/db')
const todoListDb = db.todoList
const userModel = todoListDb.import('../schema/user.js')
const router = koaRouter()

// 查找所有用户
router.get('/findall', async (ctx) => {
  const result = await userModel.findAll()
  ctx.body = result
})
router.get('/findone', async (ctx) => {
  let user_name = 'chanjoey'
  const result = await userModel.findOne({
    where: {
      user_name: user_name
    }
  })
  ctx.body = result
})
module.exports = router
