import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import HeaderState from './header/header'
import homeState from './home/home'
import homeDetailState from './home/home.detail'
const store = new Vuex.Store({
    state:{
        
    },
    modules:{
        HeaderState,
        homeState,
        homeDetailState
    }
})
export default store;