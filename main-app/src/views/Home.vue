<template>
  <div class="home">
    <div class="welcome">
      <h1>欢迎使用微前端应用管理平台</h1>
      <p class="subtitle">基于 Vue3 + qiankun 构建的企业级微前端管理系统</p>
    </div>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #667eea, #764ba2);">
          👤
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ userCount }}</div>
          <div class="stat-label">系统用户</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #f093fb, #f5576c);">
          🔐
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ roleCount }}</div>
          <div class="stat-label">角色数量</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #4facfe, #00f2fe);">
          📦
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ appCount }}</div>
          <div class="stat-label">子应用</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background: linear-gradient(135deg, #43e97b, #38f9d7);">
          📊
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ todayActive }}</div>
          <div class="stat-label">今日活跃</div>
        </div>
      </div>
    </div>

    <div class="cards">
      <div class="card">
        <h3>应用列表</h3>
        <div class="app-list">
          <div v-for="app in apps" :key="app.name" class="app-item">
            <div class="app-icon">{{ app.icon === 'User' ? '👤' : '🔐' }}</div>
            <div class="app-info">
              <div class="app-name">{{ app.title }}</div>
              <div class="app-entry">{{ app.entry }}</div>
            </div>
            <span class="status running">运行中</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h3>快速入口</h3>
        <div class="quick-links">
          <router-link to="/user-center" class="link-btn">
            <span>👤</span>
            <span>用户中心</span>
          </router-link>
          <router-link to="/permission-center" class="link-btn">
            <span>🔐</span>
            <span>权限中心</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const userCount = ref(80)
const roleCount = ref(12)
const appCount = ref(2)
const todayActive = ref(45)
const apps = ref([])

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:4000/api/apps')
    const json = await res.json()
    apps.value = json.data || []
    appCount.value = apps.value.length
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.home {
  padding: 24px;
}
.welcome {
  margin-bottom: 24px;
}
.welcome h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
}
.welcome .subtitle {
  font-size: 14px;
  color: #666;
}
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}
.stat-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.stat-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}
.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  line-height: 1.2;
}
.stat-label {
  font-size: 13px;
  color: #999;
  margin-top: 4px;
}
.cards {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
}
.card {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.card h3 {
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
}
.app-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.app-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #fafafa;
  border-radius: 6px;
}
.app-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #e6f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.app-info {
  flex: 1;
}
.app-name {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
.app-entry {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}
.status {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
}
.status.running {
  background: #e1f3d8;
  color: #67c23a;
}
.quick-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.link-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #f5f7fa;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: all 0.2s;
}
.link-btn:hover {
  background: #e6f7ff;
  color: #409eff;
}
.link-btn span:first-child {
  font-size: 20px;
}
</style>
