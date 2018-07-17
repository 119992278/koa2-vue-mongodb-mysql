const db = require('../config/db') // 引入todolist的表结构
const TodolistSchema = db.todoList.import('../schema/list.js')
const getTodolistById = async function (user_id) {
  let todolist = await TodolistSchema.findAll({ // 查找全部的todolist
    where: {
      user_id: user_id
    },
    attributes: ['id', 'content', 'status'] // 只需返回这三个字段的结果即可
  })
  return todolist // 返回数据
}

const createTodolist = async function (data) {
  await TodolistSchema.create({
    user_id: data.user_id,
    content: data.content,
    status: data.status
  })
  return true
}

const removeTodolist = async function (userId, id) {
  const result = await TodolistSchema.destroy({
    where: {
      id,
      user_id: userId
    }
  })
  return result === 1 // 如果成功删除了记录，返回1，否则返回0
}

const updateTodolist = async function (userId, id, status) {
  const result = await TodolistSchema.update(
    {
      status: status === '0'
    },
    {
      where: {
        id,
        user_id: userId
      }
    }
  )
  return result[0] === 1 // 返回一个数组，更新成功的条目为1否则为0。由于只更新一个条目，所以只返回一个元素
}

module.exports = {
  getTodolistById,
  createTodolist,
  removeTodolist,
  updateTodolist
}
