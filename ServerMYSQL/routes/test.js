const koaRouter = require('koa-router')
const router = koaRouter()
const sequelize = require('../config/db')
const UserSchema = sequelize.import('../schema/user.js')

router.get('/query', async (ctx) => {
  ctx.body = await sequelize.query('SELECT * FROM user')
})

router.get('/findOnline', async (ctx) => {
  const sequelize1 = require('../config/testDb')
  const UserSchema1 = sequelize1.import('../schema/appscomm/PLM_LOGIN_ACCOUNT.js')
  const result = await UserSchema1.findAll({
    attributes: ['USER_ID', 'ACCOUNT_ID', 'ACTIVITY_CODE'],  // 限制返回字段
    limit: 5  // 查询5条
  })
  ctx.body = result
})

router.get('/findByWhere', async (ctx) => {
  const sequelize1 = require('../config/testDb')
  const UserSchema1 = sequelize1.import('../schema/appscomm/PLM_LOGIN_ACCOUNT.js')
  const result = await UserSchema1.findAll({
    'where': {
      'USER_ID': [1, 2, 3]
    }
  })
  ctx.body = result
})

router.get('/findOne', async (ctx) => {
  const result = await UserSchema.findOne({
    where: {
      'user_name': 'chanjoey5'
    }
  })
  ctx.body = result
})

router.get('/create', async (ctx) => {
  const result = await UserSchema.create({
    'user_name': 'chanjoey3',
    'password': '123456'
  })
  ctx.body = result
})
router.get('/update', async (ctx) => {
  const result = await UserSchema.update({password: '66666'},
    {
      where: {
        'user_name': 'chanjoey3'
      }
    })
  ctx.body = result
})

router.get('/delete', async (ctx) => {
  const result = await UserSchema.destroy({
    where: {
      'user_name': 'chanjoey3'
    }
  })
  ctx.body = result
})
module.exports = router
