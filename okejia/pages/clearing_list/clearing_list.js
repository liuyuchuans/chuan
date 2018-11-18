// pages/clearing_list/clearing_list.js
var app = getApp();
var weburl = app.weburl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    packageId:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      packageId: options.packageId,
    })
  },
  //查看清单
  clearing: function (e) {
    var that = this;
    var packageId = that.data.packageId;
    var types = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '../clearing_detail/clearing_detail?packageId=' + packageId + '&types=' + types
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