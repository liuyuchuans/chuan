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
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});
export default router