import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'
import iView from 'iview'
import axios from 'axios'
import { is_login, GLOBAL_PATH, throttle} from './assets/js/api.config'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.public = {
  is_login,
  GLOBAL_PATH,
  throttle
} // 公用方法与数据都在这个上面 实例方法
Vue.public = {
  is_login,
  GLOBAL_PATH,
  throttle
} // 公用方法与数据挂在vue 静态方法

Vue.use(iView)
let vm = new Vue({
  render: h => h(App),
  router:Router,
  store
}).$mount('#app')
Vue.$__VUE = vm;
