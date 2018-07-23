const sequelize = require('../config/db')
const UserSchema = sequelize.import('../schema/user.js')
class User {
  static async findUserByName (user_name) {
    const userInfo = await UserSchema.findOne({
      where: {
        user_name
      }
    })
    return userInfo
  }
  static async createUser (user) {
    await UserSchema.create({
      'user_name': user.user_name,
      'password': user.password
    })
    return true
  }
}
module.exports = User
