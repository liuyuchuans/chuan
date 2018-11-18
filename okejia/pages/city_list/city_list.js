// pages/city_list/city_list.js
const app = getApp()
var weburl = app.weburl;
var lineHeight = 0;
var endWords = "";
var isNum;
var content = { 'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': [], 'G': [], 'H': [], 'I': [], 'J': [], 'K': [], 'L': [], 'M': [], 'N': [], 'O': [], 'P': [], 'Q': [], 'R': [], 'S': [], 'T': [], 'U': [], 'V': [], 'W': [], 'X': [], 'Y': [], 'Z': [] };
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityId: null,
    cityData: null,
    hidden: true,
    currentCity: '',
    animationData: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timer = null;
    if (app.showLoading) {
      app.showLoading();
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        showCancel: false
      })
    }
    // 指定排序的比较函数
    var compare = function (property) {
      return function (obj1, obj2) {
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value1.localeCompare(value2, "zh");
      }
    }
    //获取城市列表
    wx.request({
      url: weburl + `/wx/District/citylist.koala`,
      success: function (res) {
        if (wx.hideLoading) {
          wx.hideLoading();
        } else {
          wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
            showCancel: false
          })
        }
        if (res.data.status == 200) {
          var resData = res.data.data.sort(compare("showName"));
          if (resData) {
            resData.map(function (item) {
              for (var key in content) {
                if (item.upperCase == key) {
                  content[key].push(item)
                }
              }
            });
            wx.getSystemInfo({
              success: function (res) {
                lineHeight = (res.windowHeight) / 26;
                that.setData({
                  cityData: content,
                  winHeight: res.windowHeight,
                  lineHeight: lineHeight
                });
                for (var key in content) {
                  content[key] = [];
                }
              }
            })
          } else {
            app.showLoading('暂无城市数据');
            clearTimeout(timer);
            timer = setTimeout(function () {
              wx.hideLoading();
            }, 2000)
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

  //触发全部开始选择
  chStart: function () {
    this.setData({
      trans: ".3",
      hidden: false
    })
  },
  //触发结束选择
  chEnd: function () {
    this.setData({
      trans: "0",
      hidden: true,
      scrollTopId: this.endWords
    })
  },
  //获取文字信息
  getWords: function (e) {
    var id = e.target.id;
    this.endWords = id;
    isNum = id;
    this.setData({
      showwords: this.endWords
    })
  },
  //设置文字信息
  setWords: function (e) {
    var id = e.target.id;
    this.setData({
      scrollTopId: id
    })
  },

  // 滑动选择城市
  chMove: function (e) {
    var that = this;
    var y = e.touches[0].clientY;
    var offsettop = e.currentTarget.offsetTop;
    var height = 0;
    var cityarr = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"]
    // 获取y轴最大值
    wx.getSystemInfo({
      success: function (res) {
        height = res.windowHeight;
      }
    });
    if (y > offsettop && y < height) {
      var num = parseInt((y - offsettop) / lineHeight);
      endWords = cityarr[num];
      that.endWords = endWords;
    };
    if (isNum != num) {
      isNum = num;
      that.setData({
        showwords: that.endWords
      })
    }
  },

  //确定选择城市
  selectCity: function (e) {
    var that = this;
    var name = null;
    var cityName = e.currentTarget.dataset.cityname;
    var cityId = Number(e.currentTarget.dataset.cityid);
    if (cityName.indexOf('-') !== -1) {
      var cityNameAry = cityName.split('-');
      name = cityNameAry[cityNameAry.length - 1];
    } else {
      name = cityName;
    }
    app.orderInfo['city'] = cityId;
      wx.redirectTo({
        url: '../style/style?&name=' + name,
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
    var that = this;
    var timer = null;
    var compare = function (property) {
      return function (obj1, obj2) {
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value1.localeCompare(value2, "zh");
      }
    };
    wx.showNavigationBarLoading(); 
    wx.request({
      url: weburl + `/wx/District/citylist.koala`,
      success: function (res) {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
        if (res.data.status == 200) {
          var resData = res.data.data.sort(compare("showName"));
          if (resData) {
            resData.map(function (item) {
              for (var key in content) {
                if (item.upperCase == key) {
                  content[key].push(item)
                }
              }
            });
            wx.getSystemInfo({
              success: function (res) {
                lineHeight = (res.windowHeight) / 26;
                that.setData({
                  cityData: content,
                  winHeight: res.windowHeight,
                  lineHeight: lineHeight
                });
                for (var key in content) {
                  content[key] = [];
                }
              }
            })
          } else {
            app.showLoading('暂无城市数据');
            clearTimeout(timer);
            timer = setTimeout(function () {
              wx.hideLoading();
            }, 2000)
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