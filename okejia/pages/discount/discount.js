// pages/discount/discount.js
var app = getApp();
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 优惠卷变量
    coupon: '',//
    couponId: '',//优惠卷id
    couponNum: 0,//优惠卷名称
    couponState: '',
    showCoupon: true,
    couponData: null,
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    ticketData:null,
    mobile:null,
    noData:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取我的优惠劵
    var that=this;
    var timer = null;
    var userId = wx.getStorageSync('userData').id;
    var mobile= wx.getStorageSync('userData').mobile;
    that.setData({
      mobile: mobile
    });
    wx.request({
      url: weburl + `/wx/Ticket/pageJson.koala`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        'userId': userId,
        'useState': 1, 
         },
      success: function (res) {
        wx.hideLoading();
        if(res.data.success){
         var resData=res.data.data;
         if(resData.length){
           that.setData({
             ticketData: resData
           });
         }else{
            that.setData({
                noData:false
            });
            app.showLoading('暂无优惠');
            clearTimeout(timer);
            timer = setTimeout(function () {
              wx.hideLoading();
            }, 2000)
         }
        }
      },
      fail: function (res) {
        app.showLoading('系统开小差');
        clearTimeout(timer);
        timer = setTimeout(function () {
          wx.hideLoading();
        }, 2000)
      }
    });
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },

  //显示优惠卷列表
  showCoupon: function (e) {
    var that = this;
    var showCoupon = that.data.showCoupon;
    if (showCoupon) {
      that.setData({
        showCoupon: false
      })
    }
  },
  //选择优惠卷
  selectCoupon: function (e) {
    var that = this;
    var showCoupon = that.data.showCoupon;
    var couponId = e.currentTarget.dataset.couponid;
    var selectCoupon = e.currentTarget.dataset.selectindex;
    var couponName = e.currentTarget.dataset.couponname;
    if (!showCoupon) {
      that.setData({
        couponNum: selectCoupon,
        couponId: couponId,
        coupon: couponName,
        showCoupon: true,
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})