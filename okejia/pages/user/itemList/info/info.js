 // pages/user/lists/info.js
const app = getApp();
var weburl = app.weburl;
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    flow: true,
    state: null,
    resData: null,
    change: '../../../../img/l-off.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timer = null;
    that.setData({
      orderId: options.orderId
    })
    app.showLoading();
    //获取订单详情信息
    wx.request({
      url: weburl + `/wx/BespokeOrder/getOrder.koala`,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { 'orderId': options.orderId },
      success: function (res) {
        wx.hideLoading();
        if (res.data.status == 200) {
          var resData = res.data.data
          if (resData.order.state == 0) {
            that.setData({
              state: true
            })
          } else {
            that.setData({
              state: false
            })
          }
          that.setData({
            resData: resData,
            ticket: resData.ticket
          });
        }
      },
      fail: function () {
        app.showLoading('系统开小差');
        clearTimeout(timer);
        timer = setTimeout(function () {
          wx.hideLoading();
        }, 2000);
      }
    })
  },
  //装修流程显示与隐藏
  showFlow: function () {
    var that = this;
    if (that.data.flow) {
      that.setData({
        change: '../../../../img/l-on.png',
        flow: false
      })
    } else {
      that.setData({
        change: '../../../../img/l-off.png',
        flow: true
      })
    }
  },
  //支付
  goPay: function (e) {
    var that = this;
    var timer = null;
    var types = null;
    var orderId = that.data.orderId;
    var openId = app.globalData.openId;
    var userId = wx.getStorageSync('userData').id;
    var ticket = that.data.ticket;
    if (ticket == null) {
      types = 1;
    } else {
      types = 0;
    }
    //生成商户订单
    wx.request({
      url: weburl + `/wx/PayMent/getPrepayId.koala`,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },

      data: { openId: openId, orderId: orderId, userId: userId, type: types },
      success: function (res) {
        if (res.data.status == 200) {
          var pay = res.data.data;
          wx.requestPayment({
            timeStamp: pay.timestamp,
            nonceStr: pay.noncestr,
            package: pay.package,
            signType: "MD5",
            paySign: pay.paySign,
            success: function (res) {
              wx.showToast({
                title: '支付成功',
                icon: 'loading',
                success: function () {
                  that.setData({
                    state: false
                  })
                }
              })
            },
            fail: function (res) {
              wx.showToast({
                title: '您已取消支付',
                icon: 'loading',
                duration: 3000
              })
            },
          })
        }
      },
      fail: function () {
        app.showLoading('系统开小差');
        clearTimeout(timer);
        timer = setTimeout(function () {
          wx.hideLoading();
        }, 2000);
      }
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