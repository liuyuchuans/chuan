<template>
    <el-container >
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" v-if="tabList">
            <el-tab-pane v-for="item in tabList" :key="item.name" :label="item.title" :name="(item.url)" ></el-tab-pane>
        </el-tabs>
    </el-container>
</template>
<script>
export default{
    data() {
      return {
        editableTabsValue2: this.$route.path
      }
    },
    watch :{
        editableTabsValue2(val){
           this.$router.push( val)
           return "";
        },
         $route(){
            this.editableTabsValue2 =  this.$route.fullPath
            return this.$route.name
        }
    },
    computed:{
        tabList(){
            if(this.$store.state.tab.list.length === 0)
                this.$router.push("/");
            return this.$store.state.tab.list
        }
    },
    methods: {
        removeTab(path) {
            this.$store.commit("removeTab",path)
            if(this.tabList.length !== 0){
                let index = (this.tabList.length - 1)
                this.$router.push(this.tabList[index].url)
            }
               
        }
    }
  }
</script>
<style scoped>
.el-container{
    width: 100%;
}

</style>