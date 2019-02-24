import Vue from 'vue'
import Router from 'vue-router'
import cookieOperation from '../components/currency.js'
Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '*',
      name: 'home',
      component: () => import('@/view/home/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/home/home.vue')
    }
    
  ]
})
router.beforeEach((to, from, next) => {
  if(cookieOperation.judgelogin("token") === "next"){
    // 已登陆
    if (to.path === '/login') { //这就是跳出循环的关键
      next("/")
    } else{
      next()
    }
  }else if(cookieOperation.judgelogin("token") === "none"){
    // 未登录
    if (to.path === '/login') { //这就是跳出循环的关键
      next()
    } else {
      next('/login')
    }
  }
})
export default router