import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import cookieOperation from './api/currency.js'
import fullCalendar from 'vue-fullcalendar'    
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
// import 'echarts/lib/echarts-gl'  
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.cookieOperation = cookieOperation
Vue.use(element)
Vue.use(fullCalendar)
Vue.component('v-chart', ECharts)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})