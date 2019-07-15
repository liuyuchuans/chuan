import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import HeaderState from './header/header'
import homeState from './home/home'
const store = new Vuex.Store({
    state:{
        
    },
    modules:{
        HeaderState,
        homeState
    }
})
export default store;