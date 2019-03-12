export default {
    state:{
        list: []
    },
    mutations:{
        HomeDataChange(state,data){
            var StrHomeList = JSON.stringify(data);
            window.localStorage.setItem("HomeList",StrHomeList);
            state.list = data;
            
        },
    }
}