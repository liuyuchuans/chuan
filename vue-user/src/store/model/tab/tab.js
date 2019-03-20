
import Vue from 'vue'
export default{
    state:{
        list:[] 
    },
    mutations:{
        addTap(state,data){
            if(data.fullPath !== "/")
                state.list.push({
                    title: data.meta.title,
                    name: (state.list.length + ""),
                    url: data.fullPath
                })
                if(state.list.length >= 8){
                    state.list.splice(0,1)
                }
        },
        removeTab(state,path){
            let i = null;
            state.list.forEach((item,index) => {
                if(item.url === path)
                    state.list.splice(index,1)
                    i = index
                    return;
            });  
        }
    }
}