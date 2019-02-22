import Vue from 'vue'
import Vuex from 'vuex'
import loginData from './model/login/login.js' // 登陆数据
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        
    },
    modules:{
        loginData:loginData
    }
})
