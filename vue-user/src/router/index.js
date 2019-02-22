import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/home/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/login.vue')
    }
  ]
})
