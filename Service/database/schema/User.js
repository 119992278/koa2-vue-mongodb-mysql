const mongoose = require('mongoose') // 引入Mongoose
const Schema = mongoose.Schema // 数据库模型
let ObjectId = Schema.Types.ObjectId // 声明Object类型
const SALT_WORK_FACTOR = 10 // 定义加密密码计算强度
// 创建我们的用户模式
const userSchema = new Schema({
  user_name: {
    type: String
  },
  password: String,
  token: String
}, {collection: 'user', versionKey: false}
)
mongoose.model('User', userSchema)
