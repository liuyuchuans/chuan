<template>
    <div class="hello">
        <div class="title">
            <h4 class="size" v-text="title"></h4>
            <p class="lineHeight">没有编程基础JavaScript教程</p>
        </div>
        <div class="itemP" v-for="(item,index) in list" :key="index">
            <h4 class="size" v-text="item.title"></h4>
            <p v-for="(items , index) in item.text" :key="index" v-html="items"></p>
        </div>
        <router-link to="/grammarBasics" style="color: blue">让我们先看看最基础的吧</router-link>
    </div>
</template>

<script>
    export default {
        name: "grammarBasics",
        data(){
            return{
                list: null,
                title: null
            }
        },
        created() {
            this.axios.get('https://easy-mock.com/mock/5b88e17747255d4d3b51f042/example/grammarBasics')
                .then((data)=>{
                    // for 循环数据
                    this.list = data.data.data;
                    //页面标题
                    this.title = data.data.title;
                })
        },
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
    .itemP p{
        margin-bottom: 20px;
        margin-top: 10px;
        padding-left: 22px;
    }
</style>
