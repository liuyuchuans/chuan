<template>
    <div class="home-head">
        <div class="home-head-container">
            <div class="home-head-title">
                <p class="h2">刘予川个人博客</p>
            </div>
            <div class="home-head-nav">
                <ul>
                    <router-link :class="{'router-link-active':$route.fullPath == '/' && item.id == 1}" tag="li" v-for="item in homestate.nav" :key="item.id" :to="item.url">
                        {{ item.name }}
                    </router-link>
                </ul>
            </div>
            <!-- <div>
                111
            </div> -->
        </div>
    </div>
</template>
<script>
    export default{
        name: 'home-header',
        data(){
            return {
                
            }
        },
        props:{
            homestate: Object
        },
        created(){
            console.log(this)
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