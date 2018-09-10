// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//element ui框架
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios 
import axios from 'axios'
Vue.use(element,axios)
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }else{
    document.title = '刘予川的官方网站';
  }
  next()
})
//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  alert(1);
  //在请求发送之前做一些事
  return config;
},function(error){
  //当出现请求错误是做一些事
  return Promise.reject(error);
});

//添加一个返回拦截器
axios.interceptors.response.use(function(response){
  //对返回的数据进行一些处理
  return response;
},function(error){
  //对返回的错误进行一些处理
  return Promise.reject(error);
});

