import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: (resolve) => require(['@/components/HelloWorld'], resolve),
      children: [  
        {
          path: '/',  //编程语言  编程语言介绍
          name: 'introduce',
          component:  (resolve) => require(['@/components/programme/introduce'], resolve)
        },
        {
          path: '/introduce',  //编程语言  编程语言介绍
          name: 'introduce',
          component:  (resolve) => require(['@/components/programme/introduce'], resolve)
        },
        {
          path: '/go',         //编程语言  走进编程
          name: 'go',
          component:  (resolve) => require(['@/components/programme/go'], resolve)
        },
        {
          path: '/grammarBasics',  // 基础语法  基础
          name: 'grammarBasics',
          component:  (resolve) => require(['@/components/grammar/grammarBasics'], resolve)
        },
        {
          path: '/operator',       //基础语法  运算符
          name: 'operator',
          component:  (resolve) => require(['@/components/grammar/operator'], resolve)
        },
        {
          path: '/statement',         //基础语法  语句
          name: 'statement',
          component:  (resolve) => require(['@/components/grammar/statement'], resolve)
        },
        {
          path: '/standard',         //基础语法   规范
          name: 'standard',
          component:  (resolve) => require(['@/components/grammar/standard'], resolve)
        },
        {
          path: '/dataBasics',         //数据类型    基础
          name: 'dataBasics',
          component:  (resolve) => require(['@/components/dataType/dataBasics'], resolve)
        },
        {
          path: '/basicType',         // 数据类型   基本类型
          name: 'basicType',
          component:  (resolve) => require(['@/components/dataType/basicType'], resolve)
        },
        {
          path: '/constructorType',    //数据类型   构造器类型
          name: 'constructorType',
          component:  (resolve) => require(['@/components/dataType/constructorType'], resolve)
        },
        {
          path: '/dateObject',         //数据类型   日期对象
          name: 'dateObject',
          component:  (resolve) => require(['@/components/dataType/dateObject'], resolve)
        },
        {
          path: '/typeRecognition',    //数据类型   类型识别  
          name: 'typeRecognition',
          component:  (resolve) => require(['@/components/dataType/typeRecognition'], resolve)
        },
        {
          path: '/typeTransition',      //数据类型   类型转换
          name: 'typeTransition',
          component:  (resolve) => require(['@/components/dataType/typeTransition'], resolve)
        },
        {
          path: '/function',         //数据类型    函数
          name: 'function',
          component:  (resolve) => require(['@/components/dataType/function'], resolve)
        },
        {
          path: '/object',         //数据类型  对象
          name: 'object',
          component:  (resolve) => require(['@/components/dataType/object'], resolve)
        },
        {
          path: '/effectScope',         //难点重点   作用域
          name: 'effectScope',
          component:  (resolve) => require(['@/components/difficulty/effectScope'], resolve)
        },
        {
          path: '/closure',         //难点重点    闭包
          name: 'closure',
          component:  (resolve) => require(['@/components/difficulty/closure'], resolve)
        },
        {
          path: '/this',         //难点重点   this
          name: 'this',
          component:  (resolve) => require(['@/components/difficulty/this'], resolve)
        },
        {
          path: '/inheritRealize',   //难点重点   继承实现
          name: 'inheritRealize',
          component:  (resolve) => require(['@/components/difficulty/inheritRealize'], resolve)
        },
        {
          path: '/modularization',         // 难点重点   模块化
          name: 'modularization',
          component:  (resolve) => require(['@/components/difficulty/modularization'], resolve)
        },
        {
          path: '/nodeType',         //DOM   节点类型
          name: 'nodeType',
          component:  (resolve) => require(['@/components/DOM/nodeType'], resolve)
        },
        {
          path: '/gainNode',         //DOM   获取节点
          name: 'gainNode',
          component:  (resolve) => require(['@/components/DOM/gainNode'], resolve)
        },
        {
          path: '/nodeOperation',         //DOM  节点操作 
          name: 'nodeOperation',
          component:  (resolve) => require(['@/components/DOM/nodeOperation'], resolve)
        },
        {
          path: '/scriptStyle',         //脚本化CSS
          name: 'scriptStyle',
          component:  (resolve) => require(['@/components/scriptCss/scriptStyle'], resolve)
        },
        {
          path: '/formScript',         //表单脚本
          name: 'formScript',
          component:  (resolve) => require(['@/components/formScript/formScript'], resolve)
        },
        {
          path: '/elementFont',         //元素尺寸 
          name: 'elementFont',
          component:  (resolve) => require(['@/components/elementFont/elementFont'], resolve)
        },
        {
          path: '/incidentMechanism',         //事件  事件机制
          name: 'incidentMechanism',
          component:  (resolve) => require(['@/components/incident/incidentMechanism'], resolve)
        },
        {
          path: '/incidentType',         //事件   事件类型
          name: 'incidentType',
          component:  (resolve) => require(['@/components/incident/incidentType'], resolve)
        },
        {
          path: '/protogenesisDrag',         //拖拽
          name: 'protogenesisDrag',
          component:  (resolve) => require(['@/components/drag/protogenesisDrag'], resolve)
        },
        {
          path: '/exercise',         //运动
          name: 'exercise',
          component:  (resolve) => require(['@/components/exercise/exercise'], resolve)
        },
        {
          path: '/ajaxBasics',         //AJAX   基础
          name: 'ajaxBasics',
          component:  (resolve) => require(['@/components/AJAX/ajaxBasics'], resolve)
        },
        {
          path: '/ajaxScope',         //AJAX  跨域
          name: 'ajaxScope',
          component:  (resolve) => require(['@/components/AJAX/ajaxScope'], resolve)
        },
        {
          path: '/localityStorage',         //存储
          name: 'localityStorage',
          component:  (resolve) => require(['@/components/storage/localityStorage'], resolve)
        },
        {
          path: '/timer',         //BOM  定时器
          name: 'timer',
          component:  (resolve) => require(['@/components/BOM/timer'], resolve)
        },
        {
          path: '/window',         //BOM  window属性
          name: 'window',
          component:  (resolve) => require(['@/components/BOM/window'], resolve)
        },
        {
          path: '/html5',         // BOM html5
          name: 'html5',
          component:  (resolve) => require(['@/components/BOM/html5'], resolve)
        }
      ]
    }
  ]
})
