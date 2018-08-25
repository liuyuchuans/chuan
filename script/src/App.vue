<template>
  <div id="app">
    <div class="header">
      <header>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1"><router-link to="/">JavaScript</router-link> </el-menu-item>
          <el-submenu index="2">
            <template slot="title">关于我的</template>
            <el-menu-item index="2-1">我的工作</el-menu-item>
            <el-menu-item index="2-2">我的经验</el-menu-item>
            <el-menu-item index="2-3">我的简历</el-menu-item>
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
       background: rgb(84, 92, 100);
       width: 100%;
     }
     header{
      width: 1200px;
      margin: 0 auto;
     }
   }
   a{
     direction: none;
   }
</style>
