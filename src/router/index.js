import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/home')
    },
    {
      path: '/citys',
      component: () => import('@/views/address')
    },
    {
      path: '/indexList',
      component: () => import('@/views/indexList')
    },
    {
      path: '/layout',
      component: () => import('@/views/layout')
    },
    {
      path: '/layout01',
      component: () => import('@/views/layout01')
    },
    {
      path: '/form',
      component: () => import('@/views/form')
    }
  ]
})
