<template>
    <el-container>
        <el-header>
            <h3>后台管理系统</h3>
        </el-header>
        <el-container>
            <el-aside width="201px">
                <el-col :span="12" style="width: 100%;">
                    <el-menu :collapse="isCollapse"
                        
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#f2f2f2"
                        text-color="black"
                        active-text-color="#75B118">

                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>登陆通用页面</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
<script>
import Axios from 'axios'
    export default {
        name: '',
        data () {
            return {
                isCollapse : false
            }           
        },
        created(){
            
        },
        methods: {
           handleOpen(key, keyPath) {
               console.log(key, keyPath);
           },
           handleClose(key, keyPath) {
               console.log(key, keyPath);
           } 
        }
    }
</script>
<style scoped >
    .el-container{
        min-height: 100%;
    }

    .el-header {
        background-color: #75B118;
        color: #ffffff;
        // text-align: center;
        // line-height: 60px;
    }
    
    .el-aside {
        background-color: #f2f2f2;
        color: #333;
        text-align: center;
        // line-height: 200px;
        // min-height: 100%;
    }
    
    .el-main {
        // background-color: #76F804;
        color: #333;
        text-align: center;
        // line-height: 160px;
    }
    
    body > .el-container {
        margin-bottom: 40px;
    }
  
</style>