<template>
  <div class="hello">
      <el-col :span="12" class="left-box">
        <el-menu default-active="2" class="el-menu-vertical-demo"   active-text-color="#ffd04b">
            <el-submenu v-for="item in nav" :index="item.index" :key="item.index">
              <template slot="title">
                <span v-text="item.title"></span>
              </template>
              <el-menu-item-group v-for="items in item.names" :key="items.index">
                <router-link :to="items.url">
                  <el-menu-item v-text="items.name" :index="items.index"></el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      nav: [
        {'index': "1", 'title': '编程语言', 'names': [{'url': '/introduce', 'name': '编程语言介绍','index': '1-1'},{'url': '/go', 'name': '走进编程','index': '1-2'}]},
        {'index': "2", 'title': '基础语法', 'names': [{'url': '/grammarBasics', 'name': '基础','index': '2-1'},{'url': '/operator', 'name': '运算符','index': '2-2'},{'url': '/statement', 'name': '语句','index': '2-3'},{'url': '/standard', 'name': '规范','index': '2-4'}]},
        {'index': "3", 'title': '数据类型', 'names': [{'url': '/dataBasics', 'name': '基础','index': '3-1'},{'url': '/basicType', 'name': '基本类型','index': '3-2'},{'url': '/constructorType', 'name': '构造器类型','index': '3-3'},{'url': '/dateObject', 'name': '日期对象','index': '3-4'},{'url': '/typeRecognition', 'name': '类型识别','index': '3-5'},{'url': '/typeTransition', 'name': '类型转换','index': '3-6'},{'url': '/function', 'name': '函数','index': '3-7'},{'url': '/object', 'name': '对象','index': '3-8'}]},
        {'index': "4", 'title': '难点重点', 'names': [{'url': '/effectScope', 'name': '作用域','index': '4-1'},{'url': '/closure', 'name': '闭包','index': '4-2'},{'url': '/this', 'name': 'this','index': '4-3'},{'url': '/inheritRealize', 'name': '继承实现','index': '4-4'},{'url': '/modularization', 'name': '模块化','index': '4-5'}]},
        {'index': "5", 'title': 'DOM', 'names': [{'url': '/nodeType', 'name': '节点类型','index': '5-1'},{'url': '/gainNode', 'name': '获取节点','index': '5-2'},{'url': '/nodeOperation', 'name': '节点操作','index': '5-3'}]},
        {'index': "6", 'title': '脚本化CSS', 'names': [{'url': '/scriptStyle', 'name': '脚本化样式','index': '6-1'}]},
        {'index': "7", 'title': '表单脚本', 'names': [{'url': '/formScript', 'name': '表单脚本','index': '7-1'}]},
        {'index': "8", 'title': '元素尺寸', 'names': [{'url': '/elementFont', 'name': '元素尺寸','index': '8-1'}]},
        {'index': "9", 'title': '事件', 'names': [{'url': '/incidentMechanism', 'name': '事件机制','index': '9-1'},{'url': '/incidentType', 'name': '事件类型','index': '9-2'}]},
        {'index': "10", 'title': '拖拽', 'names': [{'url': '/protogenesisDrag', 'name': '原生拖拽','index': '10-1'}]},
        {'index': "11", 'title': '运动', 'names': [{'url': '/exercise', 'name': '均速运动','index': '11-1'}]},
        {'index': "12", 'title': 'AJAX', 'names': [{'url': '/ajaxBasics', 'name': '基础','index': '12-1'},{'url': '/ajaxScope', 'name': '跨域','index': '12-2'}]},
        {'index': "13", 'title': '存储', 'names': [{'url': '/localityStorage', 'name': '本地存储','index': '13-1'}]},
        {'index': "14", 'title': 'BOM', 'names': [{'url': '/timer', 'name': '定时器','index': '14-1'},{'url': '/window', 'name': 'window属性','index': '14-2'},{'url': '/html5', 'name': 'HTML5','index': '14-3'}]}
      ]
    }
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .left-box{
      max-width: 190px;
      min-width: 140px;
      background-color: #ffffff;
      opacity: .5;
      color: rgba(0, 0, 0, 0);
   }
   .el-submenu .el-menu-item{
     min-width: 100px;
   }
   .el-menu {
      border-right: solid 1px #e6e6e6;
      border-bottom: solid 1px #e6e6e6;
      list-style: none;
      position: relative;
      margin: 0;
      padding-left: 0;
  }

</style>
