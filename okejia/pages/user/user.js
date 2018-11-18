// pages/user/user.js
//获取应用实例
const app = getApp();
var weburl = app.weburl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '../../img/avator-off.png',
    person: '',
    showNumber: false,
    showAvatar: false
  },
  onLoad: function (options) {
   
  },
  //用户头像上传
  avatarUpload: function (e) {
    var that = this;
    var userId = wx.getStorageSync('userData').id;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        wx.uploadFile({
          url: weburl + `/wx/User/photo.koala`,
          filePath: res.tempFilePaths[0],
          name: 'file',
          header: { "Content-Type": "multipart/form-data" },
          formData: {
            'userId': userId
          },
          success: function (res) {
            var data = JSON.parse(res.data);
            if (data.success) {
              that.setData({
                avatar: data.status
              })
              wx.setStorageSync('userImg', data.status);
            } else {
              wx.showModal({
                title: '提示',
                content: '上传失败',
                showCancel: false
              })
            }
          },
          fail: function (e) {
            console.log(e);
            wx.showModal({
              title: '提示',
              content: '上传失败',
              showCancel: false
            })
          },
        })
      }
    })
  },
  //登录跳转
  goLogin: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  //项目信息列表跳转
  itemList: function () {
    if (wx.getStorageSync('userData') == '') {
      wx.navigateTo({
        url: '../login/login',
      })
      return false;
    }
    wx.navigateTo({
      url: './itemList/itemList',
    })
  },
  //跳转分享有礼
  goShare: function () {
    if (wx.getStorageSync('userData') == '') {
      wx.navigateTo({
        url: '../login/login',
      })
      return false;
    }
    wx.navigateTo({
      url: '../share/share',
    })
  }, 
  //我的优惠
  myDiscount: function () {
    if (wx.getStorageSync('userData') == '') {
      wx.navigateTo({
        url: '../login/login',
      })
      return false;
    }
    wx.navigateTo({
      url: '../discount/discount',
    })
  },
  //拨打电话
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '400-993-1916',
      success: function () {
      },
      fail: function () {
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
    var that = this;
    if (wx.getStorageSync('userData') !== '') {
      var personNumber = wx.getStorageSync('userData').name;
      var avatar = wx.getStorageSync('userImg');
      that.setData({
        person: personNumber,
        avatar: avatar,
        showNumber: true,
        showAvatar: true,
      })
    }
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
      imageUrl:'https://www.okejia.com/upload/share/new-share.jpg',
      path: '/pages/user/user',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败 
      }
    }
  }
})