<template>
    <div class="home-content">
        <div class="home-main">
            <router-view :data="HomeDataSlot" :homeDetailState="homeDetailState"></router-view>
            <homeright :data="HomeDataSlot"></homeright>
        </div>
    </div>
</template>
<script>

    import homeright from './components/home-right-module/home-right-module'
    export default{
        data(){
            return {

            }
        },
        computed: {
            HomeDataSlot(){
                return this.$store.state.homeState.listData.sort((a,b)=>{
                    return a.top - b.top;
                });
            },
            homeDetailState(){
                return this.$store.state.homeDetailState.detailData
            }
        },
        components:{
            homeright
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