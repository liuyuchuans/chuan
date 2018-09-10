<template>
  <div class="hello">
      <el-col :span="12" class="left-box" v-if="nav">
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
      nav: []
    }
  },
  created(){
    this.axios.get('https://easy-mock.com/mock/5b88e17747255d4d3b51f042/example/list')
    .then( (response)=> {
      this.nav = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
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
      color: red;
      /* color: rgba(0, 0, 0, 0); */
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
