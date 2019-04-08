import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import cookieOperation from './api/currency.js'
import fullCalendar from 'vue-fullcalendar' 
import echarts from 'echarts'   
import ECharts from 'vue-echarts'
Vue.config.productionTip = false
// Vue.config.silent = true
// Vue.config.devtools = false
Vue.prototype.$http = axios
Vue.prototype.echarts = echarts
Vue.prototype.cookieOperation = cookieOperation
Vue.use(element)
Vue.use(fullCalendar)
Vue.use(echarts)
Vue.component('v-chart', ECharts)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


// function showError(error){ 
//   alert("eee")
// switch(error.code) { 
//   case error.PERMISSION_DENIED: 
//     alert("定位失败,用户拒绝请求地理定位"); 
//     break; 
//   case error.POSITION_UNAVAILABLE: 
//     alert("定位失败,位置信息是不可用"); 
//     break; 
//   case error.TIMEOUT: 
//     alert("定位失败,请求获取用户位置超时"); 
//     break; 
//   case error.UNKNOWN_ERROR: 
//     alert("定位失败,定位系统失效"); 
//     break; 
// } 
// } 
// function showPosition(position){ 
//   alert("success")
// var lat = position.coords.latitude; //纬度 
// var lag = position.coords.longitude; //经度 
// alert('纬度:'+lat+',经度:'+lag); 
// } 
// navigator.geolocation.getCurrentPosition((a) =>{
//   alert(111)
// },showError); 