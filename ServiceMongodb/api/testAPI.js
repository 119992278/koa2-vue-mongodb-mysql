const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()
const findUser = (userName) => {
  const User = mongoose.model('User')
  return new Promise((resolve, reject) => {
    User.findOne({ userName }, (err, doc) => {
      if (err) {
        reject(err)
      }
      resolve(doc)
    })
  })
}
router.get('/', async (ctx) => {
  ctx.body = '请设置对应接口.'
})
// 插入数据
router.get('/insertUser', async (ctx) => {
  const User = mongoose.model('User')
  let newUser = new User({
    'user_name': 'chanjoey',
    'password': '123456'
  })
  await newUser.save().then(() => {
    ctx.body = {
      code: 200,
      message: '注册成功'
    }
  }).catch(error => {
    ctx.body = {
      code: 500,
      message: error
    }
  })
})

router.get('/insert', async (ctx) => {
  const List = mongoose.model('List')
  let newList = new List({
    'user_id': '1',
    'content': '测试内容',
    'status': false
  })
  await newList.save().then(() => {
    ctx.body = {
      code: 200,
      message: '新增成龙.'
    }
  }).catch(error => {
    ctx.body = {
      code: 500,
      message: error
    }
  })
})
module.exports = router
