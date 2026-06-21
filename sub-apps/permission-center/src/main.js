import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import App from './App.vue'
import routes from './router'

let router = null
let instance = null

function render(props = {}) {
  const { container } = props
  router = createRouter({
    history: createWebHashHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/permission-center/' : '/'),
    routes
  })

  instance = createApp(App)
  instance.use(router)
  instance.mount(container ? container.querySelector('#app') : '#app')
}

renderWithQiankun({
  bootstrap() {
    console.log('[permission-center] bootstraped')
  },
  mount(props) {
    console.log('[permission-center] mount', props)
    render(props)
  },
  unmount() {
    console.log('[permission-center] unmount')
    instance.unmount()
    instance._container.innerHTML = ''
    instance = null
    router = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
