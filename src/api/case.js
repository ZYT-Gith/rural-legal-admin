// 获取列表
export function getCaseList() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code:200,
        data:[
          {id:1,title:'案件1',content:'合同纠纷',time:'2026-01-10'},
          {id:2,title:'案件2',content:'劳务纠纷',time:'2026-02-15'}
        ]
      })
    },300)
  })
}
