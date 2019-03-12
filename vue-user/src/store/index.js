import Vue from 'vue'
import Vuex from 'vuex'
import loginData from './model/login/login' // 登陆数据
import home from './model/home/HomeList'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        loginData,
        home
    },
    mutations:{
       
    }
})
