<template>
    <el-container>
        <full-calendar :events="fcEvents" class="test-fc"
                     first-day='1'  lang="zh"
                     @changeMonth="changeMonth"    
                     @eventClick="eventClick"      
                     @dayClick="dayClick"></full-calendar> 
    </el-container>
</template>
<script>
// import { FullCalendar } from 'vue-fullcalendar'
var demoEvents = [
	{
      title : '川哥的生日',
      start : '2019-06-11',
      end : '2019-06-11'
    },
    {
      title : '川哥的老妈生日',
      start : '2019-05-2',
      end : '2019-05-2'
    },
    {
      title : '川哥的老弟生日',
      start : '2019-09-16',
      end : '2019-09-16'
    },
    {
      title : '川哥的老爹生日',
      start : '2019-10-3',
      end : '2019-10-3'
    }
]
export default {
    name: 'riliOne',
    data(){
        return{
            fcEvents : demoEvents
        }
    },
    components : {
	    'full-calendar': require('vue-fullcalendar')	
    },
    methods: {
        // 选择月份
        changeMonth (start, end, current) {
        // console.log('yue')
        },
        // 点击事件
        eventClick (event, jsEvent, pos) {
            // console.log("点击",)
        },
        // 点击当天
        dayClick (day, jsEvent) {
            // console.log('当天' ,day)
        }
    }
}
</script>
<style scoped>
.red {
  background: red;
}
.blue {
  background: blue;
}
  
</style>