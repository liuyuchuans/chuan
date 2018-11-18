// pages/package/package.js
var app = getApp();
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty: '',
    banners: null,
    name: null,
    styleId: null,
    category: null,
    setImg: null,
    resData: null,
    pageNum: 0,
    noDataState: false,
    notData: '../../img/noData.png',
    noMore: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var category = null;
    var modlue = null;
    var timer = null;
    wx.setNavigationBarTitle({
      title: options.styleName
    })
    that.setData({
      setImg: options.setImg,
      name: options.name,
      styleId: Number(options.styleId),
    });

    //获取轮播图数据
    oke.banners(3, 2, function (bannerData) {
      that.setData({
        banners: bannerData
      })
    });
    app.showLoading()
    wx.request({
      url: weburl + `/wx/ProComBo/newPro.koala`,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        city: options.name,
        category: 1,
        styleId: Number(options.styleId),
        pageNo: 0
      },
      success: function (res) {
        wx.hideLoading();
        if (res.data.status == 200) {
          if (res.data.data) {
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
              item.colorAlpha = item.colorAlpha ? (item.colorAlpha.split('%')[0] / 100).toFixed(2) : item.colorAlpha
            });
            that.setData({
              resData: resData
            });
          } else {
            that.setData({
              noDataState: true
            })
            app.showLoading('暂无套餐');
            clearTimeout(timer);
            timer = setTimeout(function () {
              wx.hideLoading()
            }, 2000)
          }
        }
      },
      fail: function () {
        wx.hideLoading('系统开小差');
        clearTimeout(timer);
        timer = setTimeout(function () {
          wx.hideLoading()
        }, 2000)
      }
    })
  },

  //轮播图详情
  lbtDetail: function (e) {
    var title = '';
    var urls = 'https://www.' + e.target.dataset.lbturl.split('//')[1];
    wx.navigateTo({
      url: '../h5/h5?urls=' + urls + '&title=' + title,
    })
  },

  //跳转套餐详情页
  goDetail: function (e) {
    var that = this;
    var cityName = that.data.name;
    var setImg = that.data.setImg;
    var packageId = e.currentTarget.dataset.packageid;
    var packageName = e.currentTarget.dataset.packagename;
    var residue = e.currentTarget.dataset.residue;
    var title = e.currentTarget.dataset.title;
    var nowPrice = e.currentTarget.dataset.nowprice;
    var originalPrice = e.currentTarget.dataset.originalprice;
    var kt = e.currentTarget.dataset.kt;
    var ct = e.currentTarget.dataset.ct;
    var zw = e.currentTarget.dataset.zw;
    var cw = e.currentTarget.dataset.cw;
    var wsj = e.currentTarget.dataset.wsj;
    var cf = e.currentTarget.dataset.cf;
    app.orderInfo['procomboid'] = Number(packageId);
    wx.navigateTo({
      url: '../package_detail/package_detail?packageId=' + packageId + '&packageName=' + packageName + '&setImg=' + setImg + '&residue=' + residue + '&title=' + title + '&nowPrice=' + nowPrice + '&originalPrice=' + originalPrice + '&kt=' + kt + '&ct=' + ct + '&zw=' + zw + '&cw=' + cw + '&wsj=' + wsj + '&cf=' + cf + '&cityName=' + cityName
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
    wx.showNavigationBarLoading();
    wx.request({
      url: weburl + `/wx/ProComBo/newPro.koala`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        city: that.data.name,
        category: that.data.category,
        styleId: that.data.styleId,
        pageNo: 0
      },
      success: function (res) {
        wx.hideNavigationBarLoading(); 
        wx.stopPullDownRefresh();
        if (res.data.status == 200) {
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
            resData: resData,
            noMore: false,
            pageNum: 0
          });
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
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
      url: weburl + `/wx/ProComBo/newPro.koala`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        city: that.data.name,
        category: that.data.category,
        styleId: that.data.styleId,
        pageNo: pageNum
      },
      success: function (res) {
        if (res.data.status == 200) {
          if (res.data.data) {
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
              resData: data.concat.resData
            })
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
  // onShareAppMessage: function () {
  // }
})
