<template>
  <div class="resources">
    <h2>资源管理</h2>
    <div class="tree">
      <div v-for="group in resourceGroups" :key="group.key" class="group">
        <div class="group-title">
          <span class="folder">📁</span>
          <span>{{ group.name }}</span>
        </div>
        <div class="items">
          <div v-for="item in group.items" :key="item.key" class="item">
            <span class="file">📄</span>
            <span class="name">{{ item.name }}</span>
            <span class="path">{{ item.path }}</span>
            <div class="actions">
              <label>
                <input type="checkbox" v-model="item.read" /> 查看
              </label>
              <label>
                <input type="checkbox" v-model="item.write" /> 编辑
              </label>
              <label>
                <input type="checkbox" v-model="item.delete" /> 删除
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const resourceGroups = reactive([
  {
    key: 'user',
    name: '用户管理',
    items: [
      { key: 'user-list', name: '用户列表', path: '/user-center', read: true, write: true, delete: false },
      { key: 'user-profile', name: '个人资料', path: '/user-center/profile', read: true, write: true, delete: false }
    ]
  },
  {
    key: 'permission',
    name: '权限管理',
    items: [
      { key: 'role-list', name: '角色列表', path: '/permission-center', read: true, write: true, delete: true },
      { key: 'resources', name: '资源管理', path: '/permission-center/resources', read: true, write: true, delete: false }
    ]
  },
  {
    key: 'system',
    name: '系统设置',
    items: [
      { key: 'system-config', name: '系统配置', path: '/system/config', read: true, write: false, delete: false },
      { key: 'system-log', name: '操作日志', path: '/system/log', read: true, write: false, delete: false }
    ]
  }
])
</script>

<style scoped>
.resources h2 {
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #333;
}
.tree {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.group {
  background: #fafafa;
  border-radius: 8px;
  padding: 16px;
}
.group-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 15px;
  color: #333;
  margin-bottom: 12px;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 28px;
}
.item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: #fff;
  border-radius: 6px;
  font-size: 14px;
}
.item .name {
  width: 100px;
  color: #333;
  font-weight: 500;
}
.item .path {
  flex: 1;
  color: #999;
  font-family: monospace;
  font-size: 13px;
}
.actions {
  display: flex;
  gap: 16px;
}
.actions label {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  cursor: pointer;
  font-size: 13px;
}
.folder, .file {
  font-size: 16px;
}
</style>
