<template>
   <div class="baidu-map">
       <div class="location">
           <el-alert
                :title="title"
                :type="type"
                v-if="isShow"
                show-icon>
            </el-alert>
            <el-col :span="12">
                <el-autocomplete
                    class="inline-input"
                    :span="5"
                    v-model="mylocation"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入你要查询的地方"
                    @select="goLocation">
                </el-autocomplete>
                <el-button @click="goLocation">查询</el-button>
            </el-col>
        </div>
        <div id="map"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      mylocation: "",
      mysiteinfo: "",
      restaurants: [],
      title: '请输入内容',
      isShow: false,
      type: "error"
    }
  },
  methods: {
    goLocation(item) {
        if(this.mylocation){
            var myGeo = new window.BMap.Geocoder()
            const that = this
            myGeo.getPoint(that.mylocation, function(point) {
                that.mysiteinfo = point
                if (point) {
                    that.map.centerAndZoom(point, 20)
                    that.map.addOverlay(new window.BMap.Marker(point))
                } else {
                    that.isShow = true
                    that.title = "您选择地址没有解析到结果!"
                    that.type = "info"
                    setTimeout(()=>{
                        that.isShow = false
                    },2000)
                }
            })
        }else{
            this.isShow = true
            this.title = "请输入内容"
            this.type = "error"
            setTimeout(()=>{
                this.isShow = false
            },2000)
        }
       
    },
    querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results);
    },
    createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        };
      },
    loadAll() {
        return [
            { "value": "北京", "address": "北京市" },
            { "value": "五棵松", "address": "北京市" },
            { "value": "内黄县", "address": "河南省" }
        ];
    }
  },
  mounted(){
    //   var script = document.createElement("script")
    //   script.src = "http://api.map.baidu.com/api?v=3.0&ak=6R38PW6mntG2cYsCKyYxPVc8Dv081guj"
    //   document.head.appendChild(script)
  },
  created() {
      const that = this
      this.$nextTick().then(() => {
      that.map = new window.BMap.Map('map')
      // 创建地图实例
      var point = new window.BMap.Point(116.395645, 39.929986)
      // 创建点坐标
      that.map.centerAndZoom(point, 15)
      var geoc = new window.BMap.Geocoder()
      // 初始化地图，设置中心点坐标和地图级别
      that.map.enableScrollWheelZoom() // 启用滚轮放大缩小，默认禁用
      that.map.enableContinuousZoom() // 启用地图惯性拖拽，默认禁用
      var opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM}  // 
      that.map.addControl(new BMap.NavigationControl(opts))
        var driving = new BMap.DrivingRoute(that.map, { 
            renderOptions: { 
                map: that.map, 
                autoViewport: true 
        } 
        });
      function myFun(result){
            var cityName = result.name;
            that.map.setCenter(cityName);
        }
        var myCity = new BMap.LocalCity()
        myCity.get(myFun)
    })
  },
  mounted(){
      this.restaurants = this.loadAll()
  }
}
</script>
<style scoped>

#map{
    min-width: 800px;
    min-height: 800px;
}
.el-col-12 {
    width: 40%;
    float: none;
    margin-bottom: 10px;
}
.el-input {
    width: 59%;
}
</style>
