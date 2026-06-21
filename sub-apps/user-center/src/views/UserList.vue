<template>
  <div class="user-list">
    <h2>用户列表</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>邮箱</th>
          <th>角色</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>
            <span :class="['status', user.status]">{{ user.status === 'active' ? '正常' : '禁用' }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', status: 'active' },
  { id: 2, name: '李四', email: 'lisi@example.com', role: '普通用户', status: 'active' },
  { id: 3, name: '王五', email: 'wangwu@example.com', role: '普通用户', status: 'inactive' },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: '开发人员', status: 'active' },
  { id: 5, name: '钱七', email: 'qianqi@example.com', role: '测试人员', status: 'active' }
])
</script>

<style scoped>
.user-list h2 {
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
.status {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}
.status.active {
  background: #e1f3d8;
  color: #67c23a;
}
.status.inactive {
  background: #fde2e2;
  color: #f56c6c;
}
</style>
