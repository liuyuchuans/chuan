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
// Vue.component('v-map',{
  
//   dara(){
//     return{
//       map: null
//     }
//   },
//   created() {
//     const that = this
//     this.$nextTick().then(() => {
//       that.map = new window.BMap.Map('map')
//       // 创建地图实例
//       var point = new window.BMap.Point(116.395645, 39.929986)
//       // 创建点坐标
//       that.map.centerAndZoom(point, 15)
//       var geoc = new window.BMap.Geocoder()
//       // 初始化地图，设置中心点坐标和地图级别
//       that.map.enableScrollWheelZoom() // 启用滚轮放大缩小，默认禁用
//       that.map.enableContinuousZoom() // 启用地图惯性拖拽，默认禁用
//       var opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM}  // 
//       that.map.addControl(new BMap.NavigationControl(opts))
//           var driving = new BMap.DrivingRoute(that.map, { 
//               renderOptions: { 
//                   map: that.map, 
//                   autoViewport: true 
//           } 
//           });
//       function myFun(result){
//               var cityName = result.name;
//               that.map.setCenter(cityName);
//       }
//       var myCity = new BMap.LocalCity()
//       myCity.get(myFun)
//   })
// },
// template:'<div><div id="map" style="width: 500px; height: 500px;"></div></div>',
// })
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})