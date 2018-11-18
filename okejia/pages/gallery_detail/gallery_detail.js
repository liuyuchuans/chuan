// pages/gallery_detail/gallery_detail.js
var app = getApp();
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resData: null,
    currentTab: 0, 
    scrollLeft: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      id: Number(options.id),
      category: options.category
    })
    wx.request({
      url: weburl + `/wx/home/detail.koala`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        'id': Number(options.id),
        'category': options.category
      },
      success: function (res) {
        if (res.data.success) {
          var resData = res.data.data.related.data;
          that.setData({
            resData: resData
          })
        }
      },
      fail: function () {
        wx.showToast({
          title: '系统开小差',
          icon: 'loading'
        });
      }
    });
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.currentTarget.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 11) {
      this.setData({
        scrollLeft: 1082
      })
    } else if (this.data.currentTab > 7) {
      this.setData({
        scrollLeft: 722
      })
    }
    else if (this.data.currentTab > 3) {
      this.setData({
        scrollLeft: 362
      })
    } else {
      this.setData({
        scrollLeft: 0
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
    var that=this;
    var id = that.data.id;
    var category = that.data.category;
    return {
      title: '图片详情',
      imageUrl: 'https://www.okejia.com/upload/share/new-share.jpg',
      path: '/pages/gallery_detail/gallery_detail?id=' + id + '&category=' + category,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})