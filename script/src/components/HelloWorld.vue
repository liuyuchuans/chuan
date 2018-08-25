<template>
  <div class="hello">
      <el-col :span="12" class="left-box">
        <el-menu default-active="2" class="el-menu-vertical-demo"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu v-for="item in nav" :index="item.index">
              <template slot="title">
                <span v-text="item.title"></span>
              </template>
              <el-menu-item-group v-for="items in item.names">
                <router-link :to="items.url">
                  <el-menu-item v-text="items.name" :index="items.index">选项1</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      nav: [
        {'index': "1", 'title': '编程语言', 'names': [{'url': '/introduce', 'name': '编程语言介绍','index': '1-1'},{'url': '/go', 'name': '走进编程','index': '1-2'}]},
        {'index': "2", 'title': 'JavaScript简介', 'names': [{'url': '/study', 'name': '要学习它','index': '2-1'},{'url': '/advantage', 'name': '它的好处','index': '2-2'}]},
        {'index': "3", 'title': '基础语法', 'names': [{'url': '/data', 'name': '数据类型','index': '3-1'},{'url': '/number', 'name': '数字类型','index': '3-2'},{'url': '/string', 'name': '字符串类型','index': '3-3'},{'url': '/unde', 'name': '空 / 未定义 / 布尔值','index': '3-4'},{'url': '/statement', 'name': '逻辑语句','index': '3-5'}]},
        {'index': "4", 'title': '函数', 'names': [{'url': '/function', 'name': '函数简介','index': '4-1'},{'url': '/functions', 'name': '函数使用','index': '4-2'},{'url': '/functiones6', 'name': '箭头函数','index': '4-3'},{'url': '/functionthis', 'name': '函数中的this','index': '4-4'},{'url': '/functionscope', 'name': '函数作用域','index': '4-5'}]},
        {'index': "5", 'title': '标准对象', 'names': [{'url': '/object', 'name': '对象简介','index': '5-1'},{'url': '/objects', 'name': '对象作用','index': '5-2'}]},
        {'index': "6", 'title': '面向对象', 'names': [{'url': '/faceobject', 'name': '面向对象简介','index': '6-1'},{'url': '/faceobjectmerit', 'name': '面向对象的好处','index': '6-2'}]},
        {'index': "7", 'title': 'jQuery', 'names': [{'url': '/jquery', 'name': 'jQuery简介','index': '7-1'},{'url': '/jQuerya', 'name': '学习jQuery','index': '7-2'}]}
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
   }
   .el-submenu .el-menu-item{
     min-width: 100px;
   }
   .el-menu-item-group__title {
    /* padding: 7px 0 7px 20px; */
    line-height: normal;
    font-size: 12px;
    color: #fff;
}
a{
     direction: none;
   }
</style>
