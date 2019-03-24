
import Vue from 'vue'
export default{
    state:{
        list:[] 
    },
    mutations:{
        addTap(state,data){
            // 保持页面上的Tab 没有重复
            state.list.forEach((item,index) => {
                if(item.url === data.fullPath)
                    return;
            });

            if(data.fullPath !== "/" && data.fullPath !== "/404" && data.fullPath !== "/login")
                state.list.push({
                    title: data.meta.title,
                    name: (new Date().getTime()),
                    url: data.fullPath
                })
                
                if(state.list.length >= 8){
                    state.list.splice(0,1)
                }
        },
        removeTab(state,path){
            state.list.forEach((item,index) => {
                if(item.url === path)
                    state.list.splice(index,1)
                    return;
            });  
        }
    }
}