// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(element)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})