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
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if(isChunkLoadFailed){
    // 用路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环，而用 location.reload 方法，相当于触发F5刷新页面，虽然用户体验上来说会有刷新加载察觉，但不会导致页面卡死及死循环，从而曲线救国解决该问题
      location.reload();
      // const targetPath = $router.history.pending.fullPath;
      // $router.replace(targetPath);
  }
  
});
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