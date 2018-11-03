import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: (resolve) => require(['@/components/HelloWorld'], resolve),
     
    },
    // 我的
    {
      path: '/work',         // 我的工作
      name: 'work',
      component:  (resolve) => require(['@/components/user/work'], resolve)
    },
    {
      path: '/experience',         // 我的经验
      name: 'experience',
      component:  (resolve) => require(['@/components/user/experience'], resolve)
    },
    {
      path: '/resume',         // 我的简历
      name: 'resume',
      component:  (resolve) => require(['@/components/user/resume'], resolve)
    }
  ]
})
