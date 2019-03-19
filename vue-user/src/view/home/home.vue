<template>
    <el-container>
        <el-header>
            <el-radio-group v-model="isCollapse" style="margin-top: 10px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
            <router-link to="/">
                <h3>后台管理系统</h3>
            </router-link>
            <span @click="logOut">注销</span>
            <el-tooltip class="item" effect="dark" :content="text" placement="top-start">
                <span class="el-icon-rank" @click="fullScreen"></span>
            </el-tooltip>
        </el-header>
        <el-container>
            <el-aside style=" width: auto;">
                <el-menu 
                    :collapse="isCollapse"
                    class="el-menu-vertical-demo"
                    background-color="#f2f2f2"
                    text-color="black"
                    :default-active="$route.path"
                    active-text-color="#75B118">
                    <el-submenu v-for="item in list" :key="item.id" :index="item.id + ''">
                        <template slot="title">
                            <i :class="item.class"></i>
                            <span>{{ item.text }}</span>
                        </template>
                        <el-menu-item-group v-for="items in item.listChar" :key="items.id">
                            <router-link :to="items.url" >
                                <el-menu-item :index="('/' + items.url)"  >{{ items.text }}</el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                isCollapse : false,
                text: "全屏",
                isCollapse: false    
            }           
        },
        created(){
            if(!this.list.length){
                // 刷新之后没有数据
                var HomeList = JSON.parse(window.localStorage.getItem('HomeList'));
                this.$store.commit("HomeDataChange",HomeList);
            } 
            window.onresize = () =>{
               this.toggleText();
            }
            document.onkeydown = this.Fkeydown;
        },
        computed:{
            list(){
                return this.$store.state.home.list;
            }
        },
        methods: {
            // 退出登录
            logOut(){
                this.cookieOperation.clearCookie("token")
                this.$router.replace("/login")
            },
            // 判断当前是否是全屏
            changeDivHeight(){
                if (document.fullscreenElement) {
                    return true //进入全屏
                } else {
                    return false //退出全屏
                }
            },
            // 全屏 || 取消全屏
            fullScreen(){
                if(this.changeDivHeight()){
                    if (document.exitFullscreen) {  
                        document.exitFullscreen();  
                    }  
                    else if (document.mozCancelFullScreen) {  
                        document.mozCancelFullScreen();  
                    }  
                    else if (document.webkitCancelFullScreen) {  
                        document.webkitCancelFullScreen();  
                    }  
                    else if (document.msExitFullscreen) {  
                        document.msExitFullscreen();  
                    } 
                    if(typeof cfs != "undefined" && cfs) {
                        cfs.call(el);
                    }
                    return
                }
                var el = document.documentElement;
                var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
                if(typeof rfs != "undefined" && rfs) {
                    rfs.call(el);
                };
                return;
            },
            // 阻止键盘  f11
            Fkeydown(e){
                e = e || window.event;  
                if(e.keyCode && e.keyCode === 122){  
                    return false;
                }
            },
            // 全屏 || 取消全屏事件切换
            toggleText(){
                var height = this.changeDivHeight();
                if(height){
                   this.text = "退出全屏" ;
                }else{
                   this.text = "全屏" ;
                }
            }
        }
    }
</script>
<style scoped>
    .el-container{
        min-height: 100%;
    }

    .el-header {
        background-color: #409EFF;
        color: #ffffff;
        
    }
    .el-aside{
        max-width: 201px;
        min-width: 0;
    }
    .el-header  h3{
        float: left;
        margin-left: 20px;
        cursor: pointer;
        color: #fff;
    }
    .el-header > span{
        float: right;
        line-height: 60px;
        cursor: pointer;
        margin-right: 10px;
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
        /* text-align: center; */
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
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-radio-group{
        float: left;
    }
</style>