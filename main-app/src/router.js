import Home from './views/Home.vue'
import MicroApp from './views/MicroApp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user-center/:pathMatch(.*)*',
    name: 'UserCenter',
    component: MicroApp
  },
  {
    path: '/permission-center/:pathMatch(.*)*',
    name: 'PermissionCenter',
    component: MicroApp
  }
]

export default routes
