import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'
import iView from 'iview'
import axios from 'axios'
import { is_login } from './assets/js/api.config'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.public = {} // 公用方法与数据都在这个上面
Vue.prototype.public.is_login = is_login
Vue.use(iView)
new Vue({
  render: h => h(App),
  router:Router,
  store
}).$mount('#app')
