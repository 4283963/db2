import UserList from './views/UserList.vue'
import Profile from './views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

export default routes
