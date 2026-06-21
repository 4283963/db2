import RoleList from './views/RoleList.vue'
import Resources from './views/Resources.vue'

const routes = [
  {
    path: '/',
    name: 'RoleList',
    component: RoleList
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  }
]

export default routes
