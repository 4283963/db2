<template>
  <div class="profile">
    <h2>个人资料</h2>
    <div class="card">
      <div class="avatar">
        <div class="avatar-circle">{{ profile.name.charAt(0) }}</div>
      </div>
      <div class="info">
        <div class="row">
          <span class="label">姓名：</span>
          <span class="value">{{ profile.name }}</span>
        </div>
        <div class="row">
          <span class="label">邮箱：</span>
          <span class="value">{{ profile.email }}</span>
        </div>
        <div class="row">
          <span class="label">部门：</span>
          <span class="value">{{ profile.department }}</span>
        </div>
        <div class="row">
          <span class="label">职位：</span>
          <span class="value">{{ profile.position }}</span>
        </div>
        <div class="row">
          <span class="label">入职时间：</span>
          <span class="value">{{ profile.joinDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const profile = ref({
  name: '张三',
  email: 'zhangsan@example.com',
  department: '技术部',
  position: '高级前端工程师',
  joinDate: '2022-03-15'
})
</script>

<style scoped>
.profile h2 {
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #333;
}
.card {
  display: flex;
  gap: 32px;
  padding: 24px;
  background: #fafafa;
  border-radius: 8px;
}
.avatar-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  font-weight: 600;
}
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.row {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.label {
  width: 80px;
  color: #666;
}
.value {
  color: #333;
  font-weight: 500;
}
</style>
