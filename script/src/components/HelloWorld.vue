<template>
  <div class="hello" @scroll="scroll">
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
        <el-tooltip class="item" effect="dark" content="返回顶部" placement="bottom-end">
          <span class="el-icon-upload2 ding" v-show="flag" @click="toTop"></span>
        </el-tooltip>
        <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      nav: null,
      flag: false,
      scrollTop: 0
    }
  },
  created(){
    window.addEventListener('scroll', this.scroll);
    this.axios.get('https://easy-mock.com/mock/5b88e17747255d4d3b51f042/example/list')
    .then( (response)=> {
      this.nav = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    
  },
  methods:{
    scroll(){
      this.scrollTop = document.documentElement.scrollTop||document.body.scrollTop; 
      if(this.scrollTop > 100){
        this.flag = true;
      }else{
        this.flag = false;
      }
    },
    toTop(){
       let setTime = setInterval(()=>{
        this.scrollTop -= 20;
        if(this.scrollTop <= 0){
          window.clearInterval(setTime); 
        }
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop
      },10)
    }
  }
}   
</script>
<style scoped>
   .left-box{
      max-width: 190px;
      min-width: 140px;
      background-color: #ffffff;
      opacity: .5;
      color: red;
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
  .ding{
    position: fixed;
    right: 150px;
    bottom: 100px;
    font-size: 50px;
  }
  
</style>
