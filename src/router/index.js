import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import sideBar from './routes'

Vue.use(Router)

export const routes = [
  {
    path: '',
    name: 'home',
    component: Main,
    redirect: '/hello-world',
    children: sideBar.map(item => {
      return {
        name: item.name,
        path: `/${item.name}`,
        component: () => import('../components/' + item.component)
      }
    })
  },
  {
    path: '*',
    redirect: '/hello-world'
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
