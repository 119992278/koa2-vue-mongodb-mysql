const Sequelize = require('sequelize')
const config = {
  host: 'localhost',
  user: 'root',
  password: '1234561111',
  database: 'todolist',
  port: '3308'
}
const todoList = new Sequelize('todolist', 'root', '123456', {
  host: config.host,
  dialect: 'mysql', // 数据库方言
  port: '3308',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  define: {
    timestamps: false
  }
})

module.exports = {todoList}
// import db from '../config/db.js
//   Todolist // 将Todolist暴露出接口方便Model调用
// }
