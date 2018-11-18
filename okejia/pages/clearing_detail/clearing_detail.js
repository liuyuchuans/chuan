// pages/clearing_detail/clearing_detail.js
var app = getApp();
var weburl = app.weburl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty:'暂无',
    condition: null,
    baseUrl: null,
    baseData: null,
    otherData: null,
    noDataState: false,
    notData: '../../img/noData.png'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timer = null;
    var id = Number(options.packageId);
    var types = Number(options.types);
    var decoType = app.orderInfo['decoType'];
    if (types == 0) {
      wx.setNavigationBarTitle({
        title: '基础装修清单',
      });
    } else if (types == 5) {
      wx.setNavigationBarTitle({
        title: '家具装修清单',
      });
    } else if (types == 6) {
      wx.setNavigationBarTitle({
        title: '电器装修清单',
      });
    } else if (types == 7) {
      wx.setNavigationBarTitle({
        title: '布艺装修清单',
      });
    } else if (types == 8) {
      wx.setNavigationBarTitle({
        title: '智能装修清单',
      });
    };
    app.showLoading();
    if (types == 0) {
      wx.setNavigationBarTitle({
        title: '基础装修清单',
      });
      that.setData({
        condition: 0
      });
      wx.request({
        url: weburl + `/wx/ProComBo/queryComProManage.koala`,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        data: {
          'id': id,
          'type': decoType 
        },
        success: function (res) {
          wx.hideLoading();
          if (res.data.status == 200) {
            var data = res.data.data.comboProManageDTO.functionRoomList;
            var imgBaseUrl = res.data.data.COMPROMANAGE_URL;
            if (data.length > 0) {

              data.map(function (item, index) {
                var ss = item['fc'] = [];
                item.comboProManageList.map(function (item2, index) {
                  if (item2.regong.length > 0) {
                    ss.push(item2);
                  }
                });
                that.setData({
                  baseUrl: imgBaseUrl,
                  baseData: data,
                  ss: ss
                });
              })
            } else {
              that.setData({
                noDataState: true
              })
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
    } else {
      that.setData({
        condition: 1
      });
      wx.request({
        url: weburl + `/wx/ProComBo/proCommodityDerate.koala`,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        data: {
          'id': id,
          'type': types
        },
        success: function (res) {
          wx.hideLoading();
          if (res.data.status == 200) {
            var data = res.data.data.proComboBasicsDTO.functionRoomList;
            var imgBaseUrl = res.data.data.PROCOMBOBASICS_URL
            if (data.length > 0) {
              that.setData({
                baseUrl: imgBaseUrl,
                otherData: data
              })
            } else {
              that.setData({
                noDataState: true
              })
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
  // onShareAppMessage: function () {

  // }
})