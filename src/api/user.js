export function loginApi(data) {
  // 模拟登录接口
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({code:200,msg:'登录成功',data:{name:data.username}})
    }, 500)
  })
}
