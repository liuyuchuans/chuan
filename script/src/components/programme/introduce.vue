<!-- 编程语言  编程语言介绍 -->
<template>
  <div class="hello">
    <div class="title">
      <h4 class="size">编程语言介绍</h4>
      <p class="lineHeight">没有编程基础JavaScript教程</p>
    </div>
    <div class="" v-for="(item,index) in mainTtex" :key="index" >
        <span class="size lineHeight" v-text="item.name"></span>
        <p class="text" v-html="item.detail"></p>
    </div>
    <div class="">
        <p style="line-height: 36px;"> 当然你肯定会想学了他你能做什么，其实不是说你能干什么你会一中编程语言的话你就有功底了，学什么编程语言都没有这么痛苦了 </p>
        <p><router-link to="go" style="color:blue">让我带你走进编程的世界吧</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainTtex: []
    }
  },
  created(){
    this.axios.get('https://easy-mock.com/mock/5b88e17747255d4d3b51f042/example/listIntroduce')
    .then( (response)=> {
      this.mainTtex = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  methods:{
   
  }
}
</script>

<style scoped>
  .hello{
    width: 70%;
    height: 100%;
    padding: 50px 50px 100px 220px;
     font-size: 14px;
    /* color: rgb(138, 138, 141); */
  }
  .title{
    border-bottom: solid 1px #ced2d4;
  }
  .size{
    font-size: 22px;
  }
  .lineHeight{
    line-height: 60px;
  }
  .text{
    margin-bottom: 20px;
    margin-top: 10px;
    padding-left: 22px;
  }
</style>