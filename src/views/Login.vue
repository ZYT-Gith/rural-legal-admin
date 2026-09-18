<template>
  <div class="login-page">
    <el-card class="login-card">
      <h2 style="text-align:center;margin-bottom:24px">后台登录</h2>
      <el-form :model="loginForm" @submit.prevent="handleLogin">
        <el-form-item label="账号">
          <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
defineOptions({ name: 'LoginPage' })

const userStore = useUserStore()
const router = useRouter()

const loginForm = reactive({
  username: '',
  password: ''
})

const handleLogin = async () => {
  // ========== 模拟账号密码校验 ==========
  // 预设账号：admin  密码：123456
  if(loginForm.username === 'admin' && loginForm.password === '123456'){
    // 登录成功，保存用户信息到pinia
    userStore.login({ username: loginForm.username })
    ElMessage.success('登录成功')
    router.push('/caseManage')
  }else{
    ElMessage.error('账号或密码错误！')
  }
}
</script>

<style scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background: #fff;
}
.login-card {
  width: 420px;
}
</style>
