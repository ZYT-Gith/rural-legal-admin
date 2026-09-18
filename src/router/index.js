import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const routes = [
  { path: '/login', component: () => import('@/views/Login.vue') },
  { path: '/caseManage', component: () => import('@/views/CaseManage.vue') },
  { path: '/profile', component: () => import('@/views/Profile.vue') },
  { path: '/', redirect: '/login' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  // 页面刷新时从localStorage恢复token
  if(!userStore.token){
    userStore.token = localStorage.getItem('token')
    userStore.username = localStorage.getItem('username')
  }

  // 想去登录页，直接放行
  if(to.path === '/login'){
    next()
  }else{
    // 非登录页面，校验是否登录
    if(userStore.isLogin){
      next()
    }else{
      // 未登录，跳转到登录页
      next('/login')
    }
  }
})

export default router
