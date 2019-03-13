import Vue from 'vue'
import Router from 'vue-router'
import cookieOperation from '../components/currency.js'
Vue.use(Router)

 const router = new Router({
  // mode: "history",
  routes: [
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['@/view/login/login.vue'], resolve)
    },
    {
      path: '/',
      name: 'home',
      component:  (resolve) => require(['@/view/home/home.vue'], resolve),
      children: [
        {
          path: "tongyong1",
          name: "tongyong1",
          component:  (resolve) => require(['@/view/tongyong/tongyong1'], resolve)
        },
        {
          path: "tongyong2",
          name: "tongyong2",
          component:  (resolve) => require(['@/view/tongyong/tongyong2'], resolve)
        },
        {
          path: "admin1",
          name: "admin1",
          component:  (resolve) => require(['@/view/admin/admin1'], resolve),
          beforeEnter: (to, from, next) => {
            if(cookieOperation.getCookie("token") === "admin"){
              next();
            }else{
              next("/403");
            }
          }
        },
        {
          path: "admin2",
          name: "admin2",
          component:  (resolve) => require(['@/view/admin/admin2'], resolve),
          beforeEnter: (to, from, next) => {
            if(cookieOperation.getCookie("token") === "admin"){
              next();
            }else{
              next("/403");
            }
          }
        },
        {
          path: "/403",
          component:  (resolve) => require(['@/view/403/403'], resolve)
        }
      ]
    },
    {
      path: "/*",
      component:  (resolve) => require(['@/view/404/404'], resolve)
    }
    
  ]
})
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if(isChunkLoadFailed){
    // 用路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环，而用 location.reload 方法，相当于触发F5刷新页面，虽然用户体验上来说会有刷新加载察觉，但不会导致页面卡死及死循环，从而曲线救国解决该问题
      location.reload();
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
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});
export default router