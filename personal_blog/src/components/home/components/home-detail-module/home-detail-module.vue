<template>
    <div class="home-detail-container">
        <h2 v-text="detailObj.title"></h2>
        <hr />
        <div v-html="detailObj.context"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                detailObj: {}
            }
        },
        props:{
            homeDetailState: Array
        },
        created(){
            this.rejoin();
        },
        watch:{
            '$route'(){
                this.rejoin();
            }
        },
        methods:{
            rejoin(){
                let id = this.$route.query.id
                for(var i = 0; i < this.homeDetailState.length; i++){
                    let item = this.homeDetailState[i];
                    if(item.id == id){
                        this.detailObj = item;
                        break;
                    }
                }
            }
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