// pages/package_detail/package_detail.js
var app = getApp();
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
var homeInfo = [['1室', '2室', '3室', '4室'], ['1厅', '2厅', '3厅', '4厅'], ['1卫', '2卫', '3卫', '4卫',]];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty:'',
    cityName:'',
    residue:null,
    banners: null,
    baseUrl: null,
    resData: null,
    currentTab: 0, 
    scrollLeft: 0,
    houseShow: false,
    rn: '',
    pn: '',
    tn: '',
    houseVal: [0, 0, 0],
    parlourNum: 2,
    roomNum: 2,
    toiletNum: 1,
    decoType:0,
    checked: true,
    newHome:'../../img/houseTypeNo.png',
    oldHome:'../../img/houseTypeOff.png',
    noDataState: false,
    notData: '../../img/noData.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timer = null;
    wx.setNavigationBarTitle({
      title: options.packageName,
    });
    app.orderInfo['decoType'] = that.data.decoType;
    var price = Number(options.nowPrice);
    var originalPrice = Number(options.originalPrice);
    var savePrice=(originalPrice-price).toFixed(2);
    that.setData({
      packageId: Number(options.packageId),
      kt:options.kt,
      ct: options.ct,
      zw: options.zw,
      cw: options.cw,
      wsj: options.wsj,
      cf: options.cf,
      price:price,
      originalPrice:originalPrice,
      savePrice:savePrice,
      homeInfo: homeInfo,
      residue: options.residue,
      title:options.title,
      setImg:options.setImg,
      cityName:options.cityName,
      packageName:options.packageName
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
    var cur = e.target.dataset.current;
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
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
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
  //确定选择装修户型
  homeSure: function () {
    var that = this;
    var rn = that.data.rn;
    var pn = that.data.pn;
    var tn = that.data.tn;
    var homeInfo = that.data.homeInfo;
    if (rn == '' && pn == '' && tn == '') {
      that.setData({
        roomNum: Number(homeInfo[0][0].slice(0, 1)) ,
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
  //新旧房选择
  homeSelect:function(e){
    var that=this;
    var decoType = Number(e.currentTarget.dataset.decotype);
    var checked =that.data.checked
    if (decoType==0){
    that.setData({
      checked:true,
      decoType:decoType
    })
    }else{
      that.setData({
        checked: false,
        decoType: decoType
      }) 
    }
    app.orderInfo['decoType'] = that.data.decoType;
  },

  //跳转套餐配置页面
  packageSet: function (e) {
    var that=this;
    var setImg = that.data.setImg;
    wx.navigateTo({
      url: '../package_set/package_set?img=' + setImg,
    })
  },

  //提交数据
  goSub: function (e) {
    var that = this;
    var cityName = that.data.cityName;
    var packageName = that.data.packageName;
    app.orderInfo['parlourNum'] = that.data.parlourNum;
    app.orderInfo['roomNum'] = that.data.roomNum;
    app.orderInfo['toiletNum'] = that.data.toiletNum;
    app.orderInfo['decoType'] = that.data.decoType;
      if (wx.getStorageSync('userData') == '') {
        wx.navigateTo({
          url: '../login/login',
        })
        return false;
      }
      wx.navigateTo({
        url: '../form_list/form_list?cityName=' + cityName +'&packageName='+packageName
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
  // onShareAppMessage: function () {

  // }
})