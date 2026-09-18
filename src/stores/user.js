import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state() {
    return {
      token: '',
      username: ''
    }
  },
  actions: {
    login(userInfo) {
      // 模拟token
      this.token = 'mock-token-123456'
      this.username = userInfo.username
      // 持久化，刷新页面不丢失登录状态
      localStorage.setItem('token', this.token)
      localStorage.setItem('username', this.username)
    },
    logout() {
      this.token = ''
      this.username = ''
      localStorage.removeItem('token')
      localStorage.removeItem('username')
    }
  },
  getters: {
    isLogin: (state) => !!state.token
  }
})
