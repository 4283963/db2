<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="logo">
        <div class="logo-icon">🚀</div>
        <span class="logo-text">管理平台</span>
      </div>
      <nav class="menu">
        <router-link to="/" class="menu-item">
          <span class="icon">🏠</span>
          <span>首页</span>
        </router-link>
        <router-link
          v-for="app in apps"
          :key="app.name"
          :to="app.routePrefix"
          class="menu-item"
        >
          <span class="icon">{{ app.icon === 'User' ? '👤' : '🔐' }}</span>
          <span>{{ app.title }}</span>
        </router-link>
      </nav>
    </aside>
    <main class="main">
      <header class="header">
        <div class="breadcrumb">
          <span>当前位置：</span>
          <span>{{ currentTitle }}</span>
        </div>
        <div class="user">
          <span class="user-name">管理员</span>
          <div class="user-avatar">A</div>
        </div>
      </header>
      <div class="content">
        <router-view />
        <div id="micro-app-container"></div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const apps = ref([])

const currentTitle = computed(() => {
  if (route.path === '/') return '首页'
  const matched = apps.value.find(app => route.path.startsWith(app.routePrefix))
  return matched ? matched.title : '未知'
})

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:4000/api/apps')
    const json = await res.json()
    apps.value = json.data || []
  } catch (e) {
    console.error(e)
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #app {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>

<style scoped>
.layout {
  display: flex;
  height: 100%;
}
.sidebar {
  width: 220px;
  background: #001529;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.logo-icon {
  font-size: 24px;
}
.logo-text {
  font-size: 18px;
  font-weight: 600;
}
.menu {
  flex: 1;
  padding: 8px 0;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
}
.menu-item:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}
.menu-item.router-link-active {
  background: #409eff;
  color: #fff;
}
.menu-item .icon {
  font-size: 16px;
  width: 20px;
  text-align: center;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
  overflow: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #e6e8eb;
  flex-shrink: 0;
}
.breadcrumb {
  font-size: 14px;
  color: #666;
}
.breadcrumb span:last-child {
  color: #333;
  font-weight: 500;
}
.user {
  display: flex;
  align-items: center;
  gap: 10px;
}
.user-name {
  font-size: 14px;
  color: #333;
}
.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
}
.content {
  flex: 1;
  overflow: auto;
  position: relative;
}
#micro-app-container {
  height: 100%;
}
</style>
