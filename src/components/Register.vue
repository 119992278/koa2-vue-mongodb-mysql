<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <span class="title">
       注册
      </span>
      <el-row>
        <el-input placeholder="请输入用户名" v-model="user"></el-input>
         <el-input placeholder="请输入密码" type="password" v-model="password"></el-input>
         <el-button @click="register" class="wd-full" type="primary">注册</el-button>
        <p>
          已有账号，
          <router-link to="login">立即登录</router-link>
        </p>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        user: 'chen1',
        password: '123456'
      }
    },
    methods: {
      register () {
        const data = {
          user_name: this.user,
          password: this.password
        }
        if (!data.user_name || !data.password) {
          this.$message({
            message: '用户名或密码不能为空',
            type: 'warning'
          })
        } else {
          this.$http.post('/auth/createUser', data)
            .then(res => {
              if (res.data.success) {
                sessionStorage.setItem('demo-token', res.data.token) // 用sessionStorage把token存下来
                this.$router.push('/todoList')
              } else {
                this.$message({
                  message: res.data.message,
                  type: 'warning'
                })
              }
            }).catch(err => {
              this.$message({
                message: err,
                type: 'error'
              })
            })
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .el-row.content
    padding 16px
  .title
    font-size 28px
  .el-input
    margin 12px 0
  .el-button
    width 100%
    margin-top 12px
</style>
