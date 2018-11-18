// pages/user/itemList/itemList.js
const app = getApp();
var weburl = app.weburl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:0,
    noMore: false,
    resData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户预约订单信息
    var that = this;
    var timer = null;
    var userId = wx.getStorageSync('userData').id;
    app.showLoading();
    wx.request({
      url: weburl + `/wx/BespokeOrder/getOrderByUserId.koala`,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 'userId': userId, page: 0, pageSize: 10},
      success: function (res) {
        wx.hideLoading();
        if (res.data.status == 200) {
          that.setData({
            resData: res.data.data.data
          })
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'loading',
          })
        }
      },
      fail: function () {
        app.showLoading('系统开小差');
        clearTimeout(timer);
        timer = setTimeout(function () {
          wx.hideLoading();
        }, 2000)
      }
    })
  },
  listDetail: function (e) {
    var orderId = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: './info/info?orderId=' + orderId,
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
    var that = this;
    var timer=null;
    var userId = wx.getStorageSync('userData').id;
    if (userId == undefined) {
      wx.showToast({
        title: '请登录...',
        icon: 'loading',
      })
      return false;
    }
    wx.showNavigationBarLoading();
    wx.request({
      url: weburl + `/wx/BespokeOrder/getOrderByUserId.koala`,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 'userId': userId, page: 0, pageSize: 10},
      success: function (res) {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
        if (res.data.status == 200) {
          that.setData({
            noMore:false,
            page: 0,
            resData: res.data.data.data
          })
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'loading',
          })
        }
      },
      fail: function () {
        app.showLoading('系统开小差');
        clearTimeout(timer);
        timer = setTimeout(function () {
          wx.hideLoading();
        }, 2000)
      }
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that=this;
    var timer=null;
    var data = that.data.resData;
    var userId = wx.getStorageSync('userData').id;
    that.setData({
      page: ++that.data.page,

    })
    var page = that.data.page;
    var noMore = that.data.noMore;
    if(noMore){
      wx.showToast({
        title: '暂无更多数据',
        icon: 'loading'
      });
      return false;
    }
    wx.request({
      url: weburl + `/wx/BespokeOrder/getOrderByUserId.koala`,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 'userId': userId, page: page, pageSize: 10},
      success: function (res) {
        if (res.data.status == 200) {
          that.setData({
            resData: data.concat(res.data.data.data),
          })
        } else {
          that.setData({
           noMore:true
          })
        }  
      },
      fail: function () {
        app.showLoading('系统开小差');
        clearTimeout(timer);
        timer = setTimeout(function () {
          wx.hideLoading();
        }, 2000)
      }
    })
  },

  /**
     * 用户点击右上角分享
     */
  // onShareAppMessage: function () {

  // }
})