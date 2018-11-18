// pages/style/style.js
const app = getApp()
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: null,
    banners: null,
    selected: null,
    resData: null,
    noMore: false,
    pageNum: 0,
    noDataState: false,
    notData: '../../img/noData.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timer = null;
    that.setData({
      name: options.name
    });
    app.showLoading();
    wx.request({
      url: weburl + `/wx/ProComBo/newProStyle.koala`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        city: options.name,
        pageNo: 0
      },
      success: function (res) {
        wx.hideLoading();
        if (res.data.status == 200) {
          if (res.data.data.data.length > 0) {
            var resData = res.data.data.data;
            resData.map(function (item) {
              var price = (item.price / 10000).toString(), originalPrice = (item.originalPrice / 10000).toString();
              if (price.indexOf('.') == -1) {
                item.price = Number(price).toFixed(2);
              } else {
                item.price = (Math.floor(Number(price) * 100) / 100).toFixed(2);
              }
              if (originalPrice.indexOf('.') == -1) {
                item.originalPrice = Number(originalPrice).toFixed(2);
              } else {
                item.originalPrice = (Math.floor(Number(originalPrice) * 100) / 100).toFixed(2);
              }
            })
            that.setData({
              resData: resData
            })
          } else {
            that.setData({
              noDataState: true
            });
            app.showLoading('该城市暂无风格数据');
            clearTimeout(timer);
            timer = setTimeout(function () {
              wx.hideLoading();
            }, 2000)
          }
        }
      },
      fail: function () {
        app.showLoading('系统开小差');
        clearTimeout(timer);
        timer = setTimeout(function () {
          wx.hideLoading();
        }, 2000)
      }
    });
  },
  //首图图片预览
  previewImg: function (e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, 
      urls: [src]
    })
  },
  //次图图片预览
  previewImgList: function (e) {
    var src = e.currentTarget.dataset.imglist;
    wx.previewImage({
      urls: src 
    })
  },
  //跳转套餐配置页面
  packageSet:function(e){
   var setImg=e.target.dataset.set;
   if (!setImg){
      wx.showToast({
        title: '暂无套餐配置',
        icon:'none'
      })
   }else{
     wx.navigateTo({
     url: '../package_set/package_set?img='+setImg,
   })
   }
  },
  //跳转套餐页面
  goPackage: function (e) {
    var that = this;
    var name = that.data.name;
    var styleName = e.currentTarget.dataset.stylename;
    var styleId = e.currentTarget.dataset.styleid;
    var setImg = e.target.dataset.set;
    app.orderInfo['styleCode'] = Number(styleId);
    wx.navigateTo({
      url: '../package/package?name=' + name + '&styleName=' + styleName + '&styleId=' + styleId+'&setImg='+setImg
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
    var timer = null;
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.request({
      url: weburl + `/wx/ProComBo/newProStyle.koala`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        city: that.data.name,
        pageNo: 0
      },
      success: function (res) {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh(); 
        if (res.data.status == 200) {
          if (res.data.data.data.length > 0) {
            var resData = res.data.data.data;
            resData.map(function (item) {
              var price = (item.price / 10000).toString(), originalPrice = (item.originalPrice / 10000).toString();
              if (price.indexOf('.') == -1) {
                item.price = Number(price).toFixed(2);
              } else {
                item.price = (Math.floor(Number(price) * 100) / 100).toFixed(2);
              }
              if (originalPrice.indexOf('.') == -1) {
                item.originalPrice = Number(originalPrice).toFixed(2);
              } else {
                item.originalPrice = (Math.floor(Number(originalPrice) * 100) / 100).toFixed(2);
              }
            })
            that.setData({
              resData: resData,
              pageNum:0,
              noMore: false
            })
          } else {
            that.setData({
              noDataState: true
            });
            app.showLoading('该城市暂无风格数据');
            clearTimeout(timer);
            timer = setTimeout(function () {
              wx.hideLoading();
            }, 2000)
          }
        }
      },
      fail: function () {
        wx.showToast({
          title: '系统开小差',
          icon: 'loading'
        })
      }
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    var that = this;
    var timer = null;
    that.setData({
      page: ++that.data.pageNum,
    })
    var pageNum = that.data.pageNum;
    var data = that.data.resData;
    var noMore = that.data.noMore;
    if (noMore) {
      wx.showToast({
        title: '暂无更多数据',
        icon: 'loading'
      });
      return false;
    }
    wx.request({
      url: weburl + `/wx/ProComBo/newProStyle.koala`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        city: that.data.name,
        pageNo: pageNum
      },
      success: function (res) {
        if (res.data.status == 200) {
          if (res.data.data.data.length) {
            var resData = res.data.data.data;
            resData.map(function (item) {
              var price = (item.price / 10000).toString(), originalPrice = (item.originalPrice / 10000).toString();
              if (price.indexOf('.') == -1) {
                item.price = Number(price).toFixed(2);
              } else {
                item.price = (Math.floor(Number(price) * 100) / 100).toFixed(2);
              }
              if (originalPrice.indexOf('.') == -1) {
                item.originalPrice = Number(originalPrice).toFixed(2);
              } else {
                item.originalPrice = (Math.floor(Number(originalPrice) * 100) / 100).toFixed(2);
              }
            });
            that.setData({
              resData: data.concat(resData)
            });
          } else {
            that.setData({
              noMore: true
            });
          }
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
  //底部分享按钮
  // onShareAppMessage: function (e) {
  //   return {
  // }
})