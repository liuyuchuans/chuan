import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  // mode: 'history',
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
          component:  (resolve) => require(['@/components/grammar/grammarBasics'], resolve),
          meta: {
            title: '基础语法-基础'
          }
        },
        {
          path: '/operator',       //基础语法  运算符
          name: 'operator',
          component:  (resolve) => require(['@/components/grammar/operator'], resolve),
          meta: {
            title: '基础语法-运算符'
          }
        },
        {
          path: '/statement',         //基础语法  语句
          name: 'statement',
          component:  (resolve) => require(['@/components/grammar/statement'], resolve),
          meta: {
            title: '基础语法-语句'
          }
        },
        {
          path: '/standard',         //基础语法   规范
          name: 'standard',
          component:  (resolve) => require(['@/components/grammar/standard'], resolve),
          meta: {
            title: '基础语法-规范'
          }
        },
        {
          path: '/dataBasics',         //数据类型    基础
          name: 'dataBasics',
          component:  (resolve) => require(['@/components/dataType/dataBasics'], resolve),
          meta: {
            title: '数据类型-基础'
          }
        },
        {
          path: '/basicType',         // 数据类型   基本类型
          name: 'basicType',
          component:  (resolve) => require(['@/components/dataType/basicType'], resolve),
          meta: {
            title: '数据类型-基本类型'
          }
        },
        {
          path: '/constructorType',    //数据类型   构造器类型
          name: 'constructorType',
          component:  (resolve) => require(['@/components/dataType/constructorType'], resolve),
          meta: {
            title: '数据类型-构造器类型'
          }
        },
        {
          path: '/dateObject',         //数据类型   日期对象
          name: 'dateObject',
          component:  (resolve) => require(['@/components/dataType/dateObject'], resolve),
          meta: {
            title: '数据类型-日期对象'
          }
        },
        {
          path: '/typeRecognition',    //数据类型   类型识别  
          name: 'typeRecognition',
          component:  (resolve) => require(['@/components/dataType/typeRecognition'], resolve),
          meta: {
            title: '数据类型-类型识别  '
          }
        },
        {
          path: '/typeTransition',      //数据类型   类型转换
          name: 'typeTransition',
          component:  (resolve) => require(['@/components/dataType/typeTransition'], resolve),
          meta: {
            title: '数据类型-类型转换'
          }
        },
        {
          path: '/function',         //数据类型    函数
          name: 'function',
          component:  (resolve) => require(['@/components/dataType/function'], resolve),
          meta: {
            title: '数据类型-函数'
          }
        },
        {
          path: '/object',         //数据类型  对象
          name: 'object',
          component:  (resolve) => require(['@/components/dataType/object'], resolve),
          meta: {
            title: '数据类型-对象'
          }
        },
        {
          path: '/effectScope',         //难点重点   作用域
          name: 'effectScope',
          component:  (resolve) => require(['@/components/difficulty/effectScope'], resolve),
          meta: {
            title: '难点重点-作用域'
          }
        },
        {
          path: '/closure',         //难点重点    闭包
          name: 'closure',
          component:  (resolve) => require(['@/components/difficulty/closure'], resolve),
          meta: {
            title: '难点重点-闭包'
          }
        },
        {
          path: '/this',         //难点重点   this
          name: 'this',
          component:  (resolve) => require(['@/components/difficulty/this'], resolve),
          meta: {
            title: '难点重点-this'
          }
        },
        {
          path: '/inheritRealize',   //难点重点   继承实现
          name: 'inheritRealize',
          component:  (resolve) => require(['@/components/difficulty/inheritRealize'], resolve),
          meta: {
            title: '难点重点-继承实现'
          }
        },
        {
          path: '/modularization',         // 难点重点   模块化
          name: 'modularization',
          component:  (resolve) => require(['@/components/difficulty/modularization'], resolve),
          meta: {
            title: '难点重点-模块化'
          }
        },
        {
          path: '/nodeType',         //DOM   节点类型
          name: 'nodeType',
          component:  (resolve) => require(['@/components/DOM/nodeType'], resolve),
          meta: {
            title: 'DOM-节点类型'
          }
        },
        {
          path: '/gainNode',         //DOM   获取节点
          name: 'gainNode',
          component:  (resolve) => require(['@/components/DOM/gainNode'], resolve),
          meta: {
            title: 'DOM-获取节点'
          }
        },
        {
          path: '/nodeOperation',         //DOM  节点操作 
          name: 'nodeOperation',
          component:  (resolve) => require(['@/components/DOM/nodeOperation'], resolve),
          meta: {
            title: 'DOM-节点操作 '
          }
        },
        {
          path: '/scriptStyle',         //脚本化CSS
          name: 'scriptStyle',
          component:  (resolve) => require(['@/components/scriptCss/scriptStyle'], resolve),
          meta: {
            title: '脚本化CSS'
          }
        },
        {
          path: '/formScript',         //表单脚本
          name: 'formScript',
          component:  (resolve) => require(['@/components/formScript/formScript'], resolve),
          meta: {
            title: '表单脚本'
          }
        },
        {
          path: '/elementFont',         //元素尺寸 
          name: 'elementFont',
          component:  (resolve) => require(['@/components/elementFont/elementFont'], resolve),
          meta: {
            title: '元素尺寸 '
          }
        },
        {
          path: '/incidentMechanism',         //事件  事件机制
          name: 'incidentMechanism',
          component:  (resolve) => require(['@/components/incident/incidentMechanism'], resolve),
          meta: {
            title: '事件-事件机制'
          }
        },
        {
          path: '/incidentType',         //事件   事件类型
          name: 'incidentType',
          component:  (resolve) => require(['@/components/incident/incidentType'], resolve),
          meta: {
            title: '事件-事件类型'
          }
        },
        {
          path: '/protogenesisDrag',         //拖拽
          name: 'protogenesisDrag',
          component:  (resolve) => require(['@/components/drag/protogenesisDrag'], resolve),
          meta: {
            title: '拖拽'
          }
        },
        {
          path: '/exercise',         //运动
          name: 'exercise',
          component:  (resolve) => require(['@/components/exercise/exercise'], resolve),
          meta: {
            title: '运动'
          }
        },
        {
          path: '/ajaxBasics',         //AJAX   基础
          name: 'ajaxBasics',
          component:  (resolve) => require(['@/components/AJAX/ajaxBasics'], resolve),
          meta: {
            title: 'AJAX-基础'
          }
        },
        {
          path: '/ajaxScope',         //AJAX  跨域
          name: 'ajaxScope',
          component:  (resolve) => require(['@/components/AJAX/ajaxScope'], resolve),
          meta: {
            title: 'AJAX-跨域'
          }
        },
        {
          path: '/localityStorage',         //存储
          name: 'localityStorage',
          component:  (resolve) => require(['@/components/storage/localityStorage'], resolve),
          meta: {
            title: '存储'
          }
        },
        {
          path: '/timer',         //BOM  定时器
          name: 'timer',
          component:  (resolve) => require(['@/components/BOM/timer'], resolve),
          meta: {
            title: 'BOM-定时器'
          }
        },
        {
          path: '/window',         //BOM  window属性
          name: 'window',
          component:  (resolve) => require(['@/components/BOM/window'], resolve),
          meta: {
            title: 'BOM-window属性'
          }
        },
        {
          path: '/html5',         // BOM html5
          name: 'html5',
          component:  (resolve) => require(['@/components/BOM/html5'], resolve),
          meta: {
            title: 'BOM-html5'
          }
        }
      ]
    },
    // 我的
    {
      path: '/work',         // 我的工作
      name: 'work',
      component:  (resolve) => require(['@/components/user/work'], resolve)
    },
    {
      path: '/experience',         // 我的经验
      name: 'experience',
      component:  (resolve) => require(['@/components/user/experience'], resolve)
    },
    {
      path: '/resume',         // 我的简历
      name: 'resume',
      component:  (resolve) => require(['@/components/user/resume'], resolve)
    }
  ]
})
