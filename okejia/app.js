//app.js
var util=require('utils/util.js');
var oke = require('utils/oke.js');
App({
  globalData: {
    openId: null,
    nowDate: null,
    userImg:null
  },
  cache: {},
  weburl: `https://www.okejia.com`,
  ticketIndex:0,
  orderInfo: {},
  city: '',
  // 进页面加载函数
  onLaunch: function () {
    var that = this;
    var date = (oke.formatTime(new Date())).split('/'); 
    oke.getOpenId(function (openid) {
      that.globalData.openId = openid;
    });
    that.globalData.nowDate = date[0] + '-' + date[1] + '-' + date[2];
    //读取缓存  
    try {
      var data = wx.getStorageInfoSync();
      if (data && data.keys.length) {
        data.keys.forEach(function (key) {
          var value = wx.getStorageSync(key);
          if (value) {
            that.cache[key] = value; 
          }
        });
      }
    } catch (e) { console.warn('获取缓存失败'); }
    //获取城市列表
    wx.request({
      url: that.weburl + `/wx/District/citysAll.koala`,
      data: {},
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        if (res) {
          that.city = res,data;
          return res.data;
        }
      },
      fail: function (error) { console.info(error); }
    })
  },

  //保存订单信息
  saveOrderInfo: function (key, value) {
    var that = this;
    if (!key || !value) { return; }
    that.orderInfo[key] = value

  },
  //清除订单信息      
  removeOrderInfo: function (key) {
    var that = this;
    if (!key) { return; }
    that.orderInfo[key] = '';
  },

  //保存缓存
  saveCache: function (key, value) {
    var that = this;
    if (!key || !value) { return; }
    that.cache[key] = value;
    wx.setStorageSync(key, value);
  },

  //清除缓存
  removeCache: function (key) {
    if (!key) { return; }
    var that = this;
    that.cache[key] = '';
    wx.removeStorageSync(key)
  },

  //自定义错误弹出层
  showErrorModal: function (title, content) {
    wx.showModal({
      title: title || '加载失败',
      content: content || '未知错误',
      showCancel: false
    });
  },

  //自定义弹出层
  showLoadToast: function (title, duration) {
    wx.showToast({
      title: title || '加载中',
      icon: 'loading',
      mask: true,
      duration: duration || 10000
    });
  },

  //数据加载loading
  showLoading:function(title){
    wx.showLoading({
      title: title|| '加载中...',
      mask:true
    });
  }

})