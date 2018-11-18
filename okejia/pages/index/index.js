//index.js
//获取应用实例
const app = getApp()
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (wx.onNetworkStatusChange) {
      wx.onNetworkStatusChange(function (res) {
        if (!res.isConnected) {
          wx.showToast({
            title: '当前网络不可用',
            icon: 'loading',
            duration: 4000
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        showCancel: false
      })
    }
    //获取轮播图数据
    oke.banners(3, 0, function (bannerData) {
      that.setData({
        banners: bannerData
      })
    });
  },
  //轮播图详情
  lbtDetail: function (e) {
    var title = '';
    var url = e.target.dataset.lbturl.split('//')[1].replace('www.','')
    var urls = 'https://www.' +url ;
    wx.navigateTo({
      url: '../h5/h5?urls=' + urls + '&title=' + title,
    })
  },


  //跳转城市列表
  goCityList: function (e) {
    wx.navigateTo({
      url: '../city_list/city_list'
    });
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
    return {
      title: 'OKE家',
      imageUrl: 'https://www.okejia.com/upload/share/new-share.jpg',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})