const Sequelize = require('sequelize')
const config = {host: '222.186.42.32', database: 'appscomm_common', username: 'app', password: '123', port: '3306'}
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql', // 数据库方言
  port: config.port,
  pool: { max: 5, min: 0, idle: 30000 },
  define: { timestamps: false }
})
module.exports = sequelize
