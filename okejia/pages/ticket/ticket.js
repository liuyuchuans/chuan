// pages/ticket/ticket.js
var app = getApp();
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupon: null,
    couponNum: null,
    couponData: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      cityName: options.cityName,
      packageName: options.packageName,
      couponNum: app.ticketIndex
    })
    var cityId = app.orderInfo['city'];
    //获取优惠劵
    wx.request({
      url: weburl + `/wx/Ticket/RobPreferential.koala`,
      data: { 'cityId': cityId, 'page': 0, 'pagesize': 20 },
      success: function (res) {
        if (res.data.code == 'N000000') {
          if (res.data.data.data.length > 0) {
            var couponData = res.data.data.data;
            that.setData({
              coupon: couponData[0].name,
              couponId: couponData[0].id,
              couponData: couponData
            });
          } else {
            wx.showToast({
              title: '暂无优惠',
              icon: 'loading',
            })
          }
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '系统开小差',
          icon: 'loading',
          duration: 4000
        });
      }
    });
  },
  //选择优惠卷
  selectCoupon: function (e) {
    var that = this;
    var cityName = that.data.cityName;
    var packageName = that.data.packageName;
    var ticketName = e.currentTarget.dataset.couponname;
    var ticketId = e.currentTarget.dataset.couponid;
    app.ticketIndex = e.currentTarget.dataset.selectindex;
    wx.redirectTo({
      url: '../form_list/form_list?cityName=' + cityName + '&packageName=' + packageName + '&ticketName=' + ticketName + '&ticketId=' + ticketId
    })

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
  // onShareAppMessage: function () {

  // }
})