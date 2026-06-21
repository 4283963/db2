<template>
  <div class="role-list">
    <h2>角色列表</h2>
    <table class="table">
      <thead>
        <tr>
          <th>角色ID</th>
          <th>角色名称</th>
          <th>描述</th>
          <th>用户数</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="role in roles" :key="role.id">
          <td>{{ role.id }}</td>
          <td>{{ role.name }}</td>
          <td>{{ role.desc }}</td>
          <td>{{ role.userCount }}</td>
          <td>{{ role.createTime }}</td>
          <td>
            <button class="btn btn-primary">编辑</button>
            <button class="btn btn-danger">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const roles = ref([
  { id: 1, name: '超级管理员', desc: '拥有系统所有权限', userCount: 2, createTime: '2024-01-15' },
  { id: 2, name: '管理员', desc: '拥有大部分管理权限', userCount: 5, createTime: '2024-02-20' },
  { id: 3, name: '开发人员', desc: '拥有代码相关权限', userCount: 15, createTime: '2024-03-10' },
  { id: 4, name: '测试人员', desc: '拥有测试相关权限', userCount: 8, createTime: '2024-03-15' },
  { id: 5, name: '普通用户', desc: '基础查看权限', userCount: 50, createTime: '2024-04-01' }
])
</script>

<style scoped>
.role-list h2 {
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #333;
}
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.table th,
.table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.table th {
  background: #fafafa;
  font-weight: 600;
  color: #333;
}
.table tbody tr:hover {
  background: #f5f7fa;
}
.btn {
  padding: 4px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 8px;
}
.btn-primary {
  background: #409eff;
  color: #fff;
}
.btn-primary:hover {
  background: #66b1ff;
}
.btn-danger {
  background: #f56c6c;
  color: #fff;
}
.btn-danger:hover {
  background: #f78989;
}
</style>
