<template>
    <div class="home-main-box-right">
        <ul>
            <li>
                <div class="home-img-box">
                    <img :src="user_img"/>
                </div>
                <div class="home-text-box">
                    <span class="home-text">
                        <strong>
                            大叔
                        </strong>
                    </span>
                </div>
                <div class="home-personal-introduction">
                    <span class="home--personal-introduction-text">
                        C&nbsp;的个人网站，主要记录、总结与分享我在工作、学习之中的经验、写的不对的地方，欢迎大家指出。
                    </span>
                </div>
            </li>
            <li>
                <div class="search">
                    <!-- <input type="text" class="home-input-search" v-model="val" placeholder="搜索你的问题"/><button :class="{'home-active-button': val.length != 0}" :disabled="val.length == 0"><img :src="search_img"/></button> -->
                    <Input search placeholder="搜索你的问题" />
                </div>
            </li>
            <li>
                <p class="home-title-p">点击量排行</p>
                <hr class="home-hr"/>
                <ol>
                    <router-link v-for="(item,index) in data" :key="item.id" class="home-list-li" tag="li" :to="'/detail?id=' + item.id">
                        <p>
                            <span class="home-span-box" :class="{'home-box-span': index+1 == 1 || index+1 == 2 || index+1 == 3}">{{ index+1 }}</span>
                            <span v-text="item.title"></span>
                        </p>
                    </router-link>
                </ol>
            </li>
            <li>
                <p class="home-title-p">最近编写</p>
                <hr class="home-hr"/>
                <ol>
                    <router-link v-for="item in data" :key="item.id" class="home-list-li" tag="li" :to="'/detail?id=' + item.id">
                        <p>
                            <span v-text="item.title"></span>
                        </p>
                    </router-link>
                </ol>
            </li>
            <li>
                <!-- <p class="home-title-p">我也很穷呀</p>
                <hr class="home-hr"/>
                <p class="home-title-price">左边微信，右边支付宝</p>
                <div class="home-zhifubao-weixin-price-img">
                    <img :src="weixin_img" />
                    <img :src="zhifubao_img" />
                </div> -->
                <div class="bah">备案号：京ICP备2024075415号-1</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return { 
                user_img: require('@/assets/img/user.png'),
                search_img: require('../../../../assets/img/search.png'),
                weixin_img: require('../../../../assets/img/weixin.jpeg'),
                zhifubao_img: require('../../../../assets/img/zhifubao.jpeg'),
                val: ""
            }
        },
        props:{
            data: Array
        }
    }
</script>
<style lang="scss" scope>
    @media screen and (max-width: 960px){
        @import './scss/MobilePhone.scss';
    }
    @media (min-width: 960px){
        @import './scss/pc.scss';
    }
</style>
