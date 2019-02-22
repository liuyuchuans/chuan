<template>
  <div id="app">
    
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    judgelogin(){
     // let isLogin = store.state.token; //这里我们从Vuex里取出token，因为登录请求成功后我们会将后台返回的token存储在vuex里方便使用
      //if(!isLogin){ //如果没有token，那就代表用户没有登录
        //return this.$router.push('/login'); //重定向到login页
      //} 
    }
  },
  created(){
    this.judgelogin();
  }
}
</script>

<style>

</style>
