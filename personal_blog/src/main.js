import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(iView);
new Vue({
  render: h => h(App),
  router:Router,
  store
}).$mount('#app')
