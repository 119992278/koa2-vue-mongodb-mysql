const mongoose = require('mongoose') // 引入Mongoose
const Schema = mongoose.Schema // 数据库模型
// 创建我们的用户模式
const listSchema = new Schema({
  user_id: String,
  content: String,
  status: Boolean
}, {collection: 'list', versionKey: false})
mongoose.model('Todolist', listSchema)
