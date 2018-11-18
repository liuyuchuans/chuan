// pages/down_load/down_load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderSuccess:false,
    codeShow:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //苹果二维码显示
  iphoneCode:function(){
    this.setData({
        orderSuccess: true,
        codeShow: true
      })
  },
  //安卓二维码显示
  abdriodCode: function () {
    this.setData({
      orderSuccess: true,
      codeShow: false
    })
  },
  //苹果二维码预览
  previewIphone: function (e) {
    console.log(e)
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
    })
  },
  //安卓二维码预览
  previewAbdriod: function (e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
    })
  },
  //取消折扣弹窗
  cancleMask: function () {
    var that = this;
    that.setData({
      orderSuccess: false
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
      title: '一站搞定成品家，为您省钱又省心',
      imageUrl: 'https://www.okejia.com/upload/share/new-share.jpg',
      path: '/pages/down_load/down_load',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})