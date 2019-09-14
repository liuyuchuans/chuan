const getters = {
  userInfo: state => state.user.userInfo,
  lang: state => state.app.lang,
  logo: state => {
    if (state.app.logo) {
      return state.app.logo
    }
    return require('@/assets/img/logo.png')
  },
  name: state => {
    if (state.app.name) {
      return state.app.name
    }
    return '中联集团教育科技有限公司'
  },
  activeIndex: state => state.app.sidebar.activeIndex,
  navActiveIndex: state => state.app.navbar.activeIndex,
  // 权限
  allAuth: state => state.user.allAuth,
  crm: state => state.user.crm,
  bi: state => state.user.bi,
  manage: state => state.user.manage,
  // 路由
  addRouters: state => state.permission.addRouters,
  crmRouters: state => state.permission.crmRouters,
  biRouters: state => state.permission.biRouters,
  manageRouters: state => state.permission.manageRouters,
  // 客户管理信息
  messageNum: state => state.customer.messageNum,
  messageOANum: state => state.oa.messageOANum,
  // 配置信息
  CRMConfig: state => state.app.CRMConfig
}
/**
 * 使用说明
 * import { mapGetters } from 'vuex'
 * computed: {
    ...mapGetters([
      'userInfo'
    ])
  }
 */

export default getters
