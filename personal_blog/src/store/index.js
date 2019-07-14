import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import HeaderState from './header/header'
const store = new Vuex.Store({
    state:{
        count: 1
    },
    modules:{
        HeaderState
    }
})
export default store;