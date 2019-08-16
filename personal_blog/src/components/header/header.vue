<template>
    <div class="home-head">
        <div class="home-head-container">
            <div class="home-head-title">
                <p class="h2">C&nbsp;个人博客</p>
            </div>
            <div class="home-head-nav">
                <ul>
                    <router-link :class="{'router-link-active':$route.fullPath == '/' && item.id == 1}" tag="li" v-for="item in HeaderState.nav" :key="item.id" :to="item.url">
                        {{ item.name }}
                    </router-link>
                </ul>
            </div>
            <div class="header_login_box">
                <span @click="drawer=true">login</span>
            </div>
        </div>
        <Drawer title="登陆" width="500px" :closable="false" v-model="drawer">
            
        </Drawer>
    </div>
</template>
<script>
    export default{
        name: 'home-header',
        data(){
            return {
               drawer: false 
            }
        },
        props:{
            HeaderState: Object
        }
    }
</script>
<style lang="scss">
    @media screen and (max-width: 960px){
        @import './scss/MobilePhone.scss';
    }
    @media (min-width: 960px){
        @import './scss/pc.scss';
    }
</style>>