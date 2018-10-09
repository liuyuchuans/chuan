<template>
    <div class="hello">
        <el-tabs v-model="activeName"  @tab-click="tabS">
            <el-tab-pane v-for="(item,index) in dataList" :key="index" :label="item.name" @click="tabS(item.url)" :name="item.name" :url="item.url"></el-tab-pane>
        </el-tabs>
        <div class="title">
            <h4 class="size" v-text="title"></h4>
            <p class="lineHeight">没有编程基础JavaScript教程</p>
        </div>
        <div class="itemP" v-for="(item,index) in list" :key="index">
            <h4 class="size" v-text="item.title"></h4>
            <p v-for="(items , index) in item.text" :key="index" >
                <span v-html="items.textt"></span>
                <!-- 代码显示 -->
                <el-card class="box-card" v-if="items.dataText">
                    <div v-for="itemcs in items.dataText" :key="itemcs" class="text item" v-html="itemcs">
                    </div>
                </el-card>
                <span v-if="items.texts" v-html="items.texts"></span>
            </p>
        </div>
        <!-- <router-link to="/grammarBasics" style="color: blue">让我们先看看最基础的吧</router-link> -->
    </div>
</template>

<script>
    export default {
        name: "grammarBasics",
        data(){
            return{
                list: null,
                title: null,
                dataList: [
                    {'name': '写入脚本','url': '/write'},
                    {'name': '词法结构','url': '/grammarBasics'},
                    {'name': '变量与标识符','url': '/var'},
                    {'name': '表达式','url': '/expre'},
                    {'name': '严格模式','url': '/strict'},
                    {'name': '内存管理与垃圾回收','url': '/rubbish'}
                ],
                activeName: '写入脚本'
            }
        },
        created() {
            this.axios.get('https://easy-mock.com/mock/5b88e17747255d4d3b51f042/example/write')
                .then((data)=>{
                    // for 循环数据
                    this.list = data.data.data;
                    //页面标题
                    this.title = data.data.title;
                })
        },
        methods:{
            tabS(data){
                 this.axios.get(`https://easy-mock.com/mock/5b88e17747255d4d3b51f042/example${data.$attrs.url}`)
                    .then((data)=>{
                        // for 循环数据
                        this.list = data.data.data;
                        //页面标题
                        this.title = data.data.title;
                    })
            }
        }
    }
</script>

<style scoped>
   .hello{
    width: 56%;
    height: 100%;
    padding: 5% 0% 6% 0%;
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
    .text {
        font-size: 14px;
    }

    .item {
        /* padding: 5px 0; */
    }

    .box-card {
        /* width: 480px; */
        margin: 20px 0;
    }
    /* .zs{
        color: #008000;
    }
    .kt{
        color: #0000ff;
    }
    .num{
        color: #800080;
    } */
</style>
