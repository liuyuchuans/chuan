import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import cookieOperation from './components/currency.js'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.cookieOperation = cookieOperation
Vue.use(element)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})