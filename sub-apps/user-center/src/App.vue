<template>
  <div class="user-center">
    <header class="header">
      <h1>用户中心</h1>
    </header>
    <nav class="nav">
      <router-link to="/">用户列表</router-link>
      <router-link to="/profile">个人资料</router-link>
    </nav>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.user-center {
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}
.header {
  margin-bottom: 20px;
}
.header h1 {
  margin: 0;
  color: #333;
  font-size: 24px;
}
.nav {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
}
.nav a {
  color: #409eff;
  text-decoration: none;
  font-size: 14px;
}
.nav a.router-link-active {
  color: #333;
  font-weight: 600;
}
.content {
  flex: 1;
}
</style>
