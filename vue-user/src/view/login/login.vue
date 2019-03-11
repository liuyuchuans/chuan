<template>
    <div class="login-container-main">
        <el-alert
            v-if="successLogin"
            title="登陆成功"
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
                    <el-input type="password"  placeholder="密码" v-model="form.userPass"></el-input>
                </el-form-item>
                <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
 
<script>
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
  // 时间处理函数
  methods: {
      login(){
          if(this.form.userMailbox == "admin" && this.form.userPass === "520"){
            this.cookieOperation.setCookie("token","admin");
            this.$router.replace("/");
            this.successLogin = true;
          }else if(this.form.userMailbox == "liuyuchuan" && this.form.userPass === "520"){
            this.cookieOperation.setCookie("token","liuyuchuan");
            this.$router.replace("/");
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
    @import './index.scss'
</style>
