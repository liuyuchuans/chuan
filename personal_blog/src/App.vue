<template>
  <div id="app">
      <Hoader :HeaderState="HeaderState.HeaderState"></Hoader>
      <router-view></router-view>
  </div>
</template>

<script>
    import Hoader from './components/header/header'
    export default{
        data(){
            return {

            }
        },
        components:{
            Hoader
        },
        computed:{
            HeaderState(){
                return this.$store.state;
            }
        },
        created(){
            
        },
        methods :{

        }
    }
</script>

<style>
body,html,h1,h2,h3,h4,h5,h6,p,ul,li{
    margin: 0;
    padding: 0;
}
li,ol{
    list-style: none;
}
</style>
