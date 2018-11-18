// pages/raiders/raiders.js
const app = getApp()
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currIndex:0,
    article: null,
    image: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timer = null;
    app.showLoading();
    wx.request({
      url: weburl + `/wx/home/index.koala`,
      success: function (res) {
        wx.hideLoading();
        if (res.data.success) {
          if (res.data.data.article.length) {
            that.setData({
              article: res.data.data.article
            })
          }
          if (res.data.data.image.length) {
            that.setData({
              image: res.data.data.image
            })
          }
        }
      },
      fail: function (error) {
        app.showLoading('系统开小差');
        clearTimeout(timer);
        timer = setTimeout(function () {
          wx.hideLoading();
        }, 2000)
      }
    });
  },
  //图库查看更多
  galleryDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    var category = e.currentTarget.dataset.category;
    var currIndex = e.currentTarget.dataset.currindex;
    this.setData({
      currIndex: currIndex
    });
    wx.navigateTo({
      url: '../gallery_detail/gallery_detail?id=' + id + '&category=' + category
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
  onShareAppMessage: function () {
    return {
      title: '攻略',
      imageUrl: 'https://www.okejia.com/upload/share/new-share.jpg',
      path: '/pages/ours/ours',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})