<template>
    <div class="login-container-main">
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
                    <el-button type="primary" style="width:100%;" >登录</el-button>
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
       
    }
  },
  computed:{
      form(){
          return this.$store.state.loginData;
      }
  },
  created(){
      
  }
}
</script>
<style scoped lang="scss">
    @import './index.scss'
</style>
