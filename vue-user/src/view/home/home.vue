<template>
    <el-container>
        <el-header>
            <h3>后台管理系统</h3>
            <span @click="logOut">注销</span>
            
                <el-tooltip class="item" effect="dark" :content="text" placement="top-start">
                    <span class="el-icon-rank" @click="fullScreen"></span>
                </el-tooltip>
            
        </el-header>
        <el-container>
            <el-aside width="201px">
                <el-col :span="12" style="width: 100%;" >
                    <el-menu 
                        class="el-menu-vertical-demo"
                        background-color="#f2f2f2"
                        text-color="black"
                        :default-active="$route.path"
                        active-text-color="#75B118">
                        <el-submenu v-for="item in list" :key="item.id" :index="item.id + ''">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{ item.text }}</span>
                            </template>
                            <el-menu-item-group v-for="items in item.listChar" :key="items.id">
                                <router-link :to="items.url" >
                                    <el-menu-item :index="('/' + items.url)"  >{{ items.text }}</el-menu-item>
                                </router-link>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import Axios from 'axios'
    export default {
        name: '',
        data () {
            return {
                isCollapse : false,
                text: "全屏"
            }           
        },
        created(){
           if(!this.list.length){
               // 刷新之后没有数据
               var HomeList = JSON.parse(window.localStorage.getItem('HomeList'));
               this.$store.commit("HomeDataChange",HomeList);
               // 刷新之后如果是超级管理员的话Admin 会没有访问页面的权限
            //    if(this.cookieOperation.getCookie('token') === "admin"){
            //        this.$router.addRoutes(this.cookieOperation.router.AdminRouters);
            //    }
           }
        },
        computed:{
            list(){
                return this.$store.state.home.list;
            }
        },
        methods: {
            logOut(){
                this.cookieOperation.clearCookie("token")
                this.$router.replace("/login")
            },
            fullScreen(){
                var el = document.documentElement;
                var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
                if(typeof rfs != "undefined" && rfs) {
                    rfs.call(el);
                };
                return;
                // else{
                //     if (document.exitFullscreen) {  
                //         document.exitFullscreen();  
                //     }  
                //     else if (document.mozCancelFullScreen) {  
                //         document.mozCancelFullScreen();  
                //     }  
                //     else if (document.webkitCancelFullScreen) {  
                //         document.webkitCancelFullScreen();  
                //     }  
                //     else if (document.msExitFullscreen) {  
                //         document.msExitFullscreen();  
                //     } 
                //     if(typeof cfs != "undefined" && cfs) {
                //         cfs.call(el);
                //     }
                // }
                
            }
        }
    }
</script>
<style scoped>
    .el-container{
        min-height: 100%;
    }

    .el-header {
        background-color: #75B118;
        color: #ffffff;
        
    }
    .el-header > h3{
        float: left;
    }
    .el-header > span{
        float: right;
        line-height: 60px;
        cursor: pointer;
    }
    .el-header span:nth-child(3){
        float: right;
        line-height: 60px;
        cursor: pointer;
        margin-right: 10px;

    }
    .el-aside {
        background-color: #f2f2f2;
        color: #333;
        text-align: center;
    }
    
    .el-main {
        color: #333;
        text-align: center;
    }
    
    body > .el-container {
        margin-bottom: 40px;
    }
    a{
        text-decoration: none;
    }
    .el-submenu__title {
        padding-right: 80px;
    }
</style>