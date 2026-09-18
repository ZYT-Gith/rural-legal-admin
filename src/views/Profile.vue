<template>
  <el-container style="height:100vh">
    <el-aside width="200px">
      <el-menu router>
        <el-menu-item index="/caseManage">案件管理</el-menu-item>
        <el-menu-item index="/profile">个人中心</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="padding:20px">
      <h2>个人中心</h2>
      <p>欢迎：{{ username }}</p>
      <el-button type="danger" @click="handleLogout">退出登录</el-button>
    </el-main>
  </el-container>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
defineOptions({ name: 'ProfilePage' })

const userStore = useUserStore()
const router = useRouter()
const username = userStore.username

const handleLogout = () => {
  userStore.logout()
  ElMessage.success('已退出登录')
  router.push('/login')
}
</script>
