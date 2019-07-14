import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Route = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: resolve => require(['@/components/home/home.vue'], resolve),
        },
        { 
            path: '/home', 
            component: resolve => require(['@/components/home/home.vue'], resolve),
        },
        { 
            path: '/classification', 
            component: resolve => require(['@/components/classification/classification.vue'], resolve),
        }
    ]
})

export default Route;