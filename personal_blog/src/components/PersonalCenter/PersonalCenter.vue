<template>
    <div class="PersonalCenter_content">
        <div class="PersonalCenter_bg_img"></div>
        <div class="PersonalCenter_soll"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        created(){
            console.log(this.$refs)
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