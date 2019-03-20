import Vue from 'vue'
import Vuex from 'vuex'
import loginData from './model/login/login' // 登陆数据
import home from './model/home/HomeList' // 列表数据
import tab from './model/tab/tab' // 列表数据
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        loginData,
        home,
        tab
    },
    mutations:{
       
    }
})
