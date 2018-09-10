<!-- 编程语言  走进编程 -->
<template>
  <div class="hello">
     <div class="title">
      <span class="size">走进编程</span>
      <p class="lineHeight">没有编程基础JavaScript教程</p>
    </div>
    <div class="itemP">
      <p>首先问你一句你知道洗衣服的话用洗衣机和用手洗的区别吗？</p>
      <p>我想如果不是ShaZhi的话,都知道这个问题</p>
      <p>那你是不是也知道哪一步该先来，哪一步后干呀！是不是</p>
      <p>你是不是想问我这跟洗衣服有啥区别呀！那我告诉你就是他这个先后顺序就是编程语言的逻辑！</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
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
  .itemP{
    font-size:14px; 
    line-height: 28px;
  }
</style>
