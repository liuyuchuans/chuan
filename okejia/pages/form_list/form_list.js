// pages/form_list/form_list.js
var app = getApp();
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
var homeInfo= [['1室', '2室', '3室', '4室'], ['1厅', '2厅', '3厅', '4厅'], ['1卫', '2卫', '3卫', '4卫',]];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cityName:'',
    packageName:'',
    village: '',
    area: '',
    houseType: '',
    houseShow: false,
    rn: '',
    pn: '',
    tn: '',
    houseVal: [0, 0, 0],
    parlourNum: '',
    roomNum: '',
    toiletNum: '',
    prestartTime: '请选择',
    coupon:'',
    couponState: null,
    orderInfo: null,
    orderSuccess: false,
    orderData: null,
    maskShow: false,
    animationData: {}

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timer = null;
    that.setData({
      cityName: options.cityName,
      packageName: options.packageName,
      parlourNum: app.orderInfo['parlourNum'],
      roomNum: app.orderInfo['roomNum'],
      toiletNum: app.orderInfo['toiletNum'],
      homeInfo: homeInfo,
      nowDate: app.globalData.nowDate,
    });
    if (app.ticketIndex ==0){
      wx.request({
        url: weburl + `/wx/Ticket/RobPreferential.koala`,
        data: { 'cityId': app.orderInfo['city'], 'page': 0, 'pagesize': 20 },
        success: function (res) {
          if (res.data.code == 'N000000') {
            if (res.data.data.data.length > 0) {
              var couponData = res.data.data.data;
              that.setData({
                couponState: true,
                coupon: couponData[0].name,
                couponId: couponData[0].id,
              });
            } else {
              wx.showToast({
                title: '暂无优惠',
                icon: 'loading',
                success: function () {
                  that.setData({
                    couponState: false,
                  });
                }
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
    }else{
      wx.request({
        url: weburl + `/wx/Ticket/RobPreferential.koala`,
        data: { 'cityId': app.orderInfo['city'], 'page': 0, 'pagesize': 20 },
        success: function (res) {
          if (res.data.code == 'N000000') {
            if (res.data.data.data.length > 0) {
              var couponData = res.data.data.data;
              that.setData({
                couponState: true,
              });
            } else {
              wx.showToast({
                title: '暂无优惠',
                icon: 'loading',
                success: function () {
                  that.setData({
                    couponState: false,
                  });
                }
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
      that.setData({
        coupon: options.ticketName,
        couponId:options.ticketId 
      });
    }
  
  },
  //小区名称
  village: function (e) {
    var that = this;
    var spaceReg = /\s+/g;
    that.setData({
      village: e.detail.value.replace(spaceReg, '')
    })
  },
  //房屋面积
  area: function (e) {
    var that = this;
    var spaceReg = /\s+/g;
    that.setData({
      area: e.detail.value.replace(spaceReg, '')
    });
  },
  //展示选择装修户型列表
  homeshow: function () {
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(360).step()
    this.setData({
      animationData: animation.export(),
      houseShow: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //关闭选择装修户型列表
  canclehome: function () {
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(360).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        houseShow: false
      })
    }.bind(this), 200)
  },
  //确定选择装修户型
  homeSure: function () {
    var that = this;
    var rn = that.data.rn;
    var pn = that.data.pn;
    var tn = that.data.tn;
    var homeInfo = that.data.homeInfo;

    if (rn == '' && pn == '' && tn == '') {
      that.setData({
        roomNum: Number(homeInfo[0][0].slice(0, 1)),
        parlourNum: Number(homeInfo[1][0].slice(0, 1)),
        toiletNum: Number(homeInfo[2][0].slice(0, 1)),
        houseShow: false
      });
    } else {
      that.setData({
        roomNum: Number(rn.slice(0, 1)),
        parlourNum: Number(pn.slice(0, 1)),
        toiletNum: Number(tn.slice(0, 1)),
        houseShow: false
      });
    }
  },
  //选择装修户型
  houseSelect: function (e) {
    const val = e.detail.value
    var homeInfo = this.data.homeInfo
    this.setData({
      rn: homeInfo[0][val[0]],
      pn: homeInfo[1][val[1]],
      tn: homeInfo[2][val[2]],
      houseVal: val
    });
  },

  //选择日期
  dateChange: function (e) {
    this.setData({
      prestartTime: e.detail.value,
    });
  },

  //优惠卷列表
  ticketList: function (e) {
    var that=this;
    var cityName = that.data.cityName;
    var packageName = that.data.packageName;
    wx.navigateTo({
      url: '../ticket/ticket?cityName=' + cityName + '&packageName=' + packageName
    })
  },

  //提交预约信息
  orderForm: function (e) {
    var that = this;
    var areaReg = /(^[1-9]{1}[0-9]*$)|(^[0-9]*\.[0-9]{2}$)/;
    var name = that.data.name;
    var village = that.data.village;
    var area = that.data.area;
    var prestartTime = that.data.prestartTime;
    if (village.length == 0) {
      app.showErrorModal('提示', '请填写您的小区名称');
      return false;
    }
    if (area == '') {
      app.showErrorModal('提示', '请填写您的房屋面积');
      return false;
    }
    if (!areaReg.test(area)) {
      app.showErrorModal('提示', '请填写有效面积或者保留两位小数');
      return false;
    }
    if (prestartTime == '请选择') {
      app.showErrorModal('提示', '请选择您的预计开工日期');
      return false;
    }
    app.orderInfo['village'] = that.data.village;
    app.orderInfo['area'] = Number(that.data.area);
    app.orderInfo['roomNum'] = that.data.roomNum;
    app.orderInfo['parlourNum'] = that.data.parlourNum;
    app.orderInfo['toiletNum'] = that.data.toiletNum;
    app.orderInfo['prestartTime'] = that.data.prestartTime;
    if (that.data.couponId){
      app.orderInfo['ticketId'] = that.data.couponId;
    }
    app.orderInfo['userId'] = wx.getStorageSync('userData').id;
    app.orderInfo['source'] = 6;
    app.showLoading('信息提交中...');
        wx.request({
          url: weburl + `/wx/BespokeOrder/bespeak.koala`,
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: app.orderInfo,
          success: function (res) {
            wx.hideLoading();
            if (res.data.status == 200) {
              that.setData({
                orderData: res.data.data,
                orderSuccess: true
              })
            } else {
              wx.showToast({
                title: '提交失败',
                icon: 'loading'
              });
            }
          },
          fail: function () {
            wx.hideLoading();
            wx.showToast({
              title: '系统开小差',
              icon: 'loading'
            });
          }
        });
     
  },
  //暂不缴纳
  goUser:function(){
    wx.switchTab({
      url: '../user/user',
    })
  },
  //定金支付
  orderPay: function () {
    var that = this;
    var timer = null;
    var types = null;
    var openId = app.globalData.openId;
    var userId = wx.getStorageSync('userData').id;
    var orderId = that.data.orderData.order.id;
    var ticket = that.data.orderData.ticket;
    if (ticket == null) {
      types = 1;
    } else {
      types = 0;
    }
    oke.orderPay(openId, userId, orderId, types, function (pay) {
      wx.requestPayment({
        timeStamp: pay.timestamp,
        nonceStr: pay.noncestr,
        package: pay.package,
        signType: "MD5",
        paySign: pay.paySign,
        success: function (res) {
            wx.showModal({
              title: '支付成功',
              content: '可在我的页面->项目信息->订单详情查看',
              showCancel: false,
              success: function (res) {
                wx.switchTab({
                  url: '../user/user',
                })
              },
            })
        },
        fail: function (res) {
          wx: wx.showModal({
            title: '支付失败',
            content: '可在我的页面-项目信息-订单详情重新发起支付',
            showCancel: false,
            success: function (res) {
              wx.switchTab({
                url: '../user/user',
              })
            },
          })
        },
      })
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