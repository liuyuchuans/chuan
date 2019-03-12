<template>
    <div class="login-container-main" @keyup.enter="login">
        <el-alert
            v-if="successLogin"
            title="登陆成功,请稍后..."
            center
            type="success">
        </el-alert>
         <el-alert
            v-if="errorLogin"
            title="请输入正确的用户名 || 密码"
            type="warning"
            center
            show-icon>
        </el-alert>
        <div class="login-main">
            <el-form ref="AccountFrom" label-position="center" label-width="0px"
                class="demo-ruleForm login-container">
                <h3 class="title">系统登录</h3>
                <el-form-item v-if="form">
                    <el-input type="text" placeholder="账号" v-model="form.userMailbox"></el-input>
                </el-form-item>
                <el-form-item  v-if="form">
                    <el-input type="password"  placeholder="密码"  v-model="form.userPass"></el-input>
                </el-form-item>
                <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
 
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'login',
  data () {
    return  {
       successLogin: false,
       errorLogin: false
    }
  },
  computed:{
      form(){
          return this.$store.state.loginData;
      }
  },
  created(){
      
  },
  
  // 事件处理函数
  methods: {
      login(){
          var _this = this;
          if(this.form.userMailbox == "admin" && this.form.userPass === "520"){
              // 超级管理员 权限
                
                this.$http.get(this.cookieOperation.$httpUrl + "/adminJurisdiction")
                    .then(function(data){
                       var datas = data.data.data.list;
                       _this.$store.commit('HomeDataChange',datas);
                       _this.cookieOperation.setCookie("token","admin");
                       _this.$router.replace("/");
                    })
                this.successLogin = true;
          }else if(this.form.userMailbox == "liuyuchuan" && this.form.userPass === "520"){
              // 管理员权限
                this.$http.get(this.cookieOperation.$httpUrl + "/liuyuchuanJurisdiction")
                    .then(function(data){
                       var datas = data.data.data.list;
                       _this.$store.commit('HomeDataChange',datas);
                       _this.cookieOperation.setCookie("token","liuyuchuan");
                       _this.$router.replace("/");
                    })
                
                this.successLogin = true;
          }else{
                this.errorLogin = true;
                setTimeout(()=>{
                    this.errorLogin = false;
                },2000)
          }
          
      }
  },
}
</script>
<style scoped > 
    .login-container-main{
        background-image: url("../../assets/login/login2.jpg");
        background-size:100% 100%;  
        width: 100%;
        height: 100%;
        
    }
    .login-container-main .login-main{
        background-image: none;
        width: 24%;
        padding: 50px;
        position: absolute;
        left: 36%;
        top: 10%;
        background: #f4f4f4;
        opacity: .9;
        margin-top: 20;
    }


</style>
