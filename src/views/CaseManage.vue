<template>
  <el-container style="height:100vh">
    <el-aside width="200px">
      <el-menu router>
        <el-menu-item index="/caseManage">案件管理</el-menu-item>
        <el-menu-item index="/profile">个人中心</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="padding:20px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h2>案件管理</h2>
        <el-button type="primary" @click="openAddDialog">添加案件</el-button>
      </div>

      <!-- 案件表格 -->
      <el-table :data="caseList" border>
        <el-table-column label="编号" prop="id"></el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column label="时间" prop="time"></el-table-column>
        <!-- 操作列：编辑 + 删除 -->
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button type="primary" link @click="openEditDialog(scope.row)">编辑</el-button>
            <el-button type="danger" link @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total, prev, next"
        :total="caseList.length"
        style="margin-top:10px"
      />

      <!-- 新增/编辑共用弹窗 -->
      <el-dialog v-model="dialogVisible" :title="dialogTitle">
        <el-form :model="form">
          <el-form-item label="案件标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="案件类型">
            <el-select v-model="form.type" placeholder="请选择案件类型" style="width:100%">
              <el-option label="婚姻家庭" value="婚姻家庭"/>
              <el-option label="合同纠纷" value="合同纠纷"/>
              <el-option label="知识产权" value="知识产权"/>
              <el-option label="劳动争议" value="劳动争议"/>
              <el-option label="交通事故" value="交通事故"/>
              <el-option label="其它类型" value="其它类型"/>
            </el-select>
          </el-form-item>
          <el-form-item label="案件时间">
            <el-date-picker
              v-model="form.time"
              type="date"
              placeholder="请选择日期"
              value-format="YYYY-MM-DD"
              style="width:100%"
            ></el-date-picker>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm">确定</el-button>
        </template>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, computed } from 'vue'

// 案件列表（本地临时数据）
const caseList = ref([
  { id:1, title:'案件1', type:'合同纠纷', time:'2026-01-10' },
  { id:2, title:'案件2', type:'婚姻家庭', time:'2026-02-15' }
])

const dialogVisible = ref(false)
// 标记当前是新增还是编辑模式
const isEdit = ref(false)
const form = ref({ id:null, title:'', type:'', time:'' })

// 弹窗标题动态切换
const dialogTitle = computed(() => {
  return isEdit.value ? '编辑案件' : '新增案件'
})

// 打开新增弹窗
const openAddDialog = () => {
  isEdit.value = false
  form.value = { id:null, title:'', type:'', time:'' }
  dialogVisible.value = true
}

// 打开编辑弹窗，回填数据
const openEditDialog = (row) => {
  isEdit.value = true
  // 用展开运算符复制一份，避免直接修改原数据
  form.value = { ...row }
  dialogVisible.value = true
}

// 提交（新增/编辑共用）
const submitForm = () => {
  if (isEdit.value) {
    // 编辑：找到对应id，更新数据
    const index = caseList.value.findIndex(item => item.id === form.value.id)
    if (index > -1) {
      caseList.value[index] = { ...form.value }
    }
  } else {
    // 新增
    const newId = caseList.value.length > 0 ? caseList.value[caseList.value.length-1].id + 1 : 1
    caseList.value.push({ ...form.value, id: newId })
  }
  dialogVisible.value = false
}

// 删除案件
const handleDelete = (row) => {
  caseList.value = caseList.value.filter(item => item.id !== row.id)
}
</script>
