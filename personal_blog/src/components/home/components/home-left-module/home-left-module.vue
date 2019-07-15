<template>
    <div class="home-main-box-left">
        <ul>
            <router-link v-for="item in data" :key="item.id" tag="li" :to="'/detail?id=' + item.id">
                <div class="box-litop">
                    <strong v-show="item.top == 1">[置顶]</strong>
                    <span v-text="item.title" class="top-text"></span>
                </div>
                <div class="box-libottom">
                    <span class="subtitle" v-text="item.subtitle"></span>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return { 
                
            }
        },
        props:{
            data: Array
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
</style>
