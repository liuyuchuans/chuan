<template>
    <el-container class="main-container">
        <el-header>
            <el-radio-group v-model="isCollapse" style="margin-top: 10px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
            <router-link to="/">
                <h3>后台管理系统</h3>
            </router-link>
            <!-- <span @click="logOut">注销</span>
             -->
             <div class="dropdown">
                 <el-tooltip class="item" effect="dark" :content="text" placement="top-start">
                    <span class="el-icon-rank" @click="fullScreen"></span>
                </el-tooltip>
                 <el-dropdown size="mini" split-button type="primary"  @command="handleCommand">
                    {{ city }}
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logOut">注销/重新登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <div id="remap"></div>
             </div>
            
        </el-header>
        <el-container >
            <el-aside style=" width: auto;">
                <el-menu 
                    :collapse="isCollapse"
                    class="el-menu-vertical-demo"
                    background-color="#f2f2f2"
                    text-color="black"
                    :default-active="$route.path"
                    active-text-color="#409EFF">
                    <el-submenu v-for="item in listArr.optionSelct" :key="item.id" :index="item.id + ''">
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
                    <router-link v-for="item in listArr.selects" :key="item.id" :to="item.url">
                        <el-menu-item  :index="('/' + item.url)">
                            <i :class="item.class"></i>
                            <span slot="title">{{ item.text }}</span>
                        </el-menu-item>
                     </router-link >
                </el-menu>
            </el-aside>
            <el-main>
                <tab></tab>
                <!-- <keep-alive> -->
                    <router-view />
                <!-- </keep-alive> -->
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import tab from "./tab/tab"
    export default {
        name: '',
        data () {
            return {
                isCollapse : false,
                text: "全屏",
                isCollapse: false,
                city: null
            }           
        },
        components:{
            tab
        },
        created(){
            if(this.$route.fullPath !== "/"){
                this.$store.commit("addTap",this.$route)
            }
            if(!this.list.length){  
                // 刷新之后没有数据
                var HomeList = JSON.parse(window.localStorage.getItem('HomeList'))
                this.$store.commit("HomeDataChange",HomeList)
            } 
            window.onresize = () =>{
               this.toggleText()
            } 
            document.onkeydown = this.Fkeydown
            
        },
        mounted(){
            let _this = this
            let map = new window.BMap.Map("remap")
            function myFun(result){
                var cityName = result.name
                map.setCenter(cityName)
                _this.city = cityName
            }
            var myCity = new BMap.LocalCity();
            myCity.get(myFun);
        },
        watch :{
             $route(){
                var tabList = this.$store.state.tab.list
                let flag = true
                for(var i = 0; i < tabList.length; i++){
                   var item = tabList[i]
                   if(this.$route.fullPath == item.url){
                       flag = false
                       break
                   }
                }
                if(flag){
                    this.$store.commit("addTap",this.$route)
                }
                return ""
            },
        },
        computed:{
            // 左侧列表
            list(){
                return this.$store.state.home.list
            },
           
            listArr(){
                var optionSelct = new Array();
                var selects = new Array()
                for(var i = 0; i < this.list.length; i++){
                    var item = this.list[i]
                    if(item.listChar){
                        optionSelct.push(item)
                    }else{
                        selects.push(item)
                    }
                }
                return {
                    optionSelct,
                    selects
                }
            }
        },
        methods: {
            handleCommand(command) {
                if(command === "logOut"){
                    this.logOut();
                }
            },
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
                        document.exitFullscreen()
                    }  
                    else if (document.mozCancelFullScreen) {  
                        document.mozCancelFullScreen()  
                    }  
                    else if (document.webkitCancelFullScreen) {  
                        document.webkitCancelFullScreen()  
                    }  
                    else if (document.msExitFullscreen) {  
                        document.msExitFullscreen()
                    } 
                    if(typeof cfs != "undefined" && cfs) {
                        cfs.call(el)
                    }
                    return
                }
                var el = document.documentElement;
                var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen   
                if(typeof rfs != "undefined" && rfs) {
                    rfs.call(el)
                };
                return
            },
            // 阻止键盘  f11
            Fkeydown(e){
                e = e || window.event;  
                if(e.keyCode && e.keyCode === 122){  
                    return false
                }
            },
            // 全屏 || 取消全屏事件切换
            toggleText(){
                var height = this.changeDivHeight()
                if(height){
                   this.text = "退出全屏" 
                }else{
                   this.text = "全屏" 
                }
            }
        }
    }
</script>
<style scoped>
    .main-container{
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
    .el-header > .dropdown{
        float: right;
        margin-top: 15px;
        margin-right: 10px;
        /* background-color: #f4f4f4; */
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
        margin: 0;
        padding: 0;
        margin-left: 10px;
        
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
    .el-main >>> .comp-full-calendar {
        max-width: none;
        width: 70%;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    /* .el-main >>>.el-radio-button__orig-radio:checked+.el-radio-button__inner {
        color: black;
        background-color: #fff;
        border-color: #fff;
    } */
</style>