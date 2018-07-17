const db = require('../config/db')
const UserSchema = db.todoList.import('../schema/user.js')
class User {
  /**
   * 查询用户信息
   * @param name  姓名
   * @returns {Promise.<*>}
   */
  static async findUserByName (user_name) {
    const userInfo = await UserSchema.findOne({
      where: {
        user_name
      }
    })
    return userInfo
  }

  /**
   * 创建用户
   * @param user
   * @returns {Promise.<boolean>}
   */
  static async createUser (user) {
    await UserSchema.create({
      'name': user.name,
      'password': user.password
    })
    return true
  }
}

module.exports = User
