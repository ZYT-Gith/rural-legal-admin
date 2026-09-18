//axios 封装
import axios from 'axios'
const service = axios.create({
  baseURL: '',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  return config
})
// 响应拦截器
service.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log('请求错误', err)
  return Promise.reject(err)
})

export default service
