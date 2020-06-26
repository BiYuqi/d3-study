import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'

Vue.use(Router)

export const routes = [
  {
    path: '',
    name: 'home',
    component: Main,
    redirect: '/hello-world',
    children: [
      {
        name: 'hello-world',
        path: '/hello-world',
        component: () => import('../views/HelloWorld')
      }
    ]
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
  if (process.env.NODE_ENV === 'production') {
    if (to.path) window._hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  next()
})

export default router
