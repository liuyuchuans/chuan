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