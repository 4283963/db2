import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './router'
import { registerMicroApps, start } from 'qiankun'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

async function fetchApps() {
  try {
    const res = await fetch('http://localhost:4000/api/apps')
    const json = await res.json()
    return json.data || []
  } catch (e) {
    console.error('Failed to fetch apps:', e)
    return []
  }
}

fetchApps().then(apps => {
  const microApps = apps.map(item => ({
    name: item.name,
    entry: item.entry,
    container: '#micro-app-container',
    activeRule: item.routePrefix,
    props: {
      appInfo: item
    }
  }))

  registerMicroApps(microApps, {
    beforeLoad: [
      app => {
        console.log('[Main] before load', app.name)
      }
    ],
    beforeMount: [
      app => {
        console.log('[Main] before mount', app.name)
      }
    ],
    afterMount: [
      app => {
        console.log('[Main] after mount', app.name)
      }
    ],
    beforeUnmount: [
      app => {
        console.log('[Main] before unmount', app.name)
      }
    ],
    afterUnmount: [
      app => {
        console.log('[Main] after unmount', app.name)
      }
    ]
  })

  start({
    sandbox: {
      experimentalStyleIsolation: true
    }
  })
})
