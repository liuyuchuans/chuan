<template>
  <div id="app">
    <div class="loading" v-if="isLoading">
      <div>
        <img src="http://static.xuanbiaoqing.com/image/create/loading/slide.gif">
      </div>
    </div>
    <div class="header">
      <header>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"   active-text-color="#ffd04b">
          <el-menu-item index="1"><router-link to="/">JavaScript</router-link> </el-menu-item>
          <el-submenu index="2">
            <template slot="title">关于我的</template>
            <el-menu-item index="2-1"><router-link to="/work">我的工作</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/experience">我的经验</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/resume">我的简历</router-link></el-menu-item>
          </el-submenu>
        </el-menu>
      </header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          isLoading: false
        };
      },
      beforeCreate(){
      //添加一个请求拦截器
        this.axios.interceptors.request.use((config)=>{
          //在请求发送之前做一些事
          this.isLoading = true;
          return config;
        },function(error){
          //当出现请求错误是做一些事
          return Promise.reject(error);
        });
        //添加一个返回拦截器
        this.axios.interceptors.response.use((response) => {
          //对返回的数据进行一些处理
          this.isLoading = false;
          return response;
        },function(error){
          //对返回的错误进行一些处理
          return Promise.reject(error);
        });
      },
      methods: {
        handleSelect(key, keyPath) {
         
        }
      }
    }
  

</script>

<style lang="scss">
  *{
    margin: 0 auto;
  }
   #app{
     height: auto;
     margin: 0 auto;

     .header{
       border-bottom: solid 1px #e6e6e6;
       width: 100%;
        background-color: #ffffff;
        opacity: .8;
     }
     header{
      width: 1200px;
      margin: 0 auto;
     }
   }
   a{
     text-decoration: none;
     color: #303133;
   }
   .loading{
     z-index: 100000;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: rgba(200, 200, 200, .3);
     div{
       width: 200px;
       height: 200px;
       margin: 200px auto; 
     }
   }
</style>
