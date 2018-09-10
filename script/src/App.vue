<template>
  <div id="app">
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
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
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
</style>
