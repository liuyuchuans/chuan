// pages/look/gWatch/gWatch.js
const app = getApp();
var weburl = app.weburl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '',
    classId:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.setData({classId:options.id})
    var that = this;
    wx.request({
      url: weburl + '/wx/ProComBo/home.koala',
      method: "GET",
      data: {
        columnId: that.data.classId
      },
      success: function (res) {
        console.log(res.data.data.hortArticle)
        var list = res.data.data
        // 其他文章url修改拼接
        for (var i = 0; i < list.columnArticle.length; i++) {
          for (var j = 0; j < list.columnArticle[i].mobileArticle.length; j++){
            var urls = list.columnArticle[i].mobileArticle[j].url;
            var index = urls.lastIndexOf("/");
            urls = urls.slice(index + 1);
            list.columnArticle[i].mobileArticle[j].url = `https://www.okejia.com/h5/` + urls
          }
        }
        // 热门文章url修改拼接
        for (var i = 0; i < list.hortArticle.length; i++){
          var urls = list.hortArticle[i].url;
          var index = urls.lastIndexOf("/");
          urls = urls.slice(index + 1);
          list.hortArticle[i].url = `https://www.okejia.com/h5/` + urls
        }
        that.setData({
          content: list
        })
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
  onShareAppMessage: function () {

  }
})