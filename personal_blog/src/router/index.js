import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Route = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            name: '',
            redirect: '/home',
            component: resolve => require(['@/components/home/home.vue'], resolve)
        },
        { 
            path: '/home', 
            name: '',
            component: resolve => require(['@/components/home/home.vue'], resolve),
            children:[
                { 
                    path: '', 
                    // name: 'detail',
                    component: resolve => require(['@/components/home/components/home-left-module/home-left-module.vue'], resolve),
                },
                { 
                    path: '/detail', 
                    name: 'detail',
                    component: resolve => require(['@/components/home/components/home-detail-module/home-detail-module'], resolve),
                }
            ]
        },
        { 
            path: '/classification', 
            name: 'classification',
            component: resolve => require(['@/components/classification/classification.vue'], resolve),
            beforeEnter: (to, from, next) => {
                if(Vue.public.is_login().success){
                    next()
                }else{
                    // 事件节流 相当与setTimeout
                    Vue.public.throttle(()=>{
                        Vue.$__VUE.$Message.info('未登陆');
                        Vue.$__VUE.$router.push(from.fullPath)
                    },window)
                }
            }
        },
        { 
            path: '/PersonalCenter', 
            name: 'PersonalCenter',
            component: resolve => require(['@/components/PersonalCenter/PersonalCenter.vue'], resolve),
            beforeEnter: (to, from, next) => {
                if(Vue.public.is_login().success){
                    next()
                }else{
                    // 事件节流 相当与setTimeout
                    Vue.public.throttle(()=>{
                        Vue.$__VUE.$Message.info('未登陆');
                        Vue.$__VUE.$router.push(from.fullPath)
                    },window)
                }
            }
        }
        
    ]
})

export default Route;