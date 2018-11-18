// pages/look/construction/conInfo/conInfo.js
const app = getApp();
var weburl = app.weburl; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageNo:0,
    listId:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({listId:options.id})
    this.upList();
  },
  /**
    * 页面上拉触底事件的处理函数
    */
  onReachBottom: function () {
    this.upList()
  },


  // 加载数据请求
  upList:function(){
    wx.showLoading({
      title: '正在加载',
      mask: true
    })
    var that = this;
    wx.request({
      url: weburl + '/wx/ProComBo/hortMore.koala',
      method: "GET",
      data: {
        columnId: that.data.listId,
        pageNo: that.data.pageNo
      },
      success: function (res) {
        if (res.data.data.data.length <= 0){
          wx.hideLoading()
          wx.showToast({
            title: '暂无更多数据',
            icon:'none'
          })
          return
        }  
        var list = res.data.data.data;
        for (var i = 0; i < list.length; i++) {
          var urls = list[i].url;
          var index = urls.lastIndexOf("/");
          urls = urls.slice(index + 1);
          list[i].url = `https://www.okejia.com/h5/` + urls
        }
        list = that.data.list.concat(list)
        that.setData({
          list: list,
          pageNo: that.data.pageNo + 1
        })
        wx.hideLoading()
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})