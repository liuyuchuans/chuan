// pages/look/construction/twoInfo/twoInfo.js
const app = getApp();
var weburl = app.weburl; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
  list:[],
  myClass:false,
  isId:'',
  left:null,
  pageNo: 0,
  listId: null,
  isTop:null
  },
  // 开始滑动，记录x值
  touchStart(e){
    var pageLeft = e.changedTouches[0].clientX;
    this.setData({
      left:pageLeft
    })
  },
  // 左滑事件
  touchLeft(e){
    var pageLeft = e.changedTouches[0].clientX;
    // console.log(this.data.left-pageLeft)
    if(this.data.left-pageLeft >80){
      this.cliMax()
    }
    if (pageLeft - this.data.left>80){
      this.cliNew()
    }
  },
  // 点击最热文章
  cliMax(){
    var that = this;
    this.setData({
      myClass:true,
      pageNo:0
    })
    // 获取最热文章信息
    wx.request({
      url: weburl + '/wx/ProComBo/articleMore.koala',
      method: 'GET',
      data: {
        columnId: that.data.isId,
        pageNo: 0,
        isTop: 1
      },
      success: function (res) {
        var list = res.data.data.data

        for (var i = 0; i < list.length; i++) {
          var urls = list[i].url;
          var index = urls.lastIndexOf("/");
          urls = urls.slice(index + 1);
          list[i].url = `https://www.okejia.com/h5/` + urls
        }
        that.setData({
          list:list
        })
      }
    })
  },
  cliNew() {
    var that = this;
    this.setData({
      myClass: false,
      isTop:0
    })
    // 获取最新文章信息
    wx.request({
      url: weburl + '/wx/ProComBo/articleMore.koala',
      method: 'GET',
      data: {
        columnId: that.data.isId,
        pageNo: 0,
        isTop: 0
      },
      success: function (res) {
        var list = res.data.data.data

        for (var i = 0; i < list.length; i++) {
          var urls = list[i].url;
          var index = urls.lastIndexOf("/");
          urls = urls.slice(index + 1);
          list[i].url = `https://www.okejia.com/h5/` + urls
        }
        that.setData({
          list: list,
          pageNo:that.data.pageNo+1
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      isId:options.id
    })
    wx.setNavigationBarTitle({
      title: options.name,
    })
    this.upList(0);
  },
  // 获取文章列表
  upList: function (istop) {
    wx.showLoading({
      title: '正在加载',
      mask: true
    })
    var that = this;
    wx.request({
      url: weburl + '/wx/ProComBo/articleMore.koala',
      method: "GET",
      data: {
        columnId: that.data.isId,
        pageNo:that.data.pageNo ,
        isTop: istop
      },
      success: function (res) {
        if (res.data.data.data.length <= 0) {
          wx.hideLoading()
          wx.showToast({
            title: '暂无更多数据',
            icon: 'none'
          })
          return
        }
        // url修改协议拼接
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
          pageNo: that.data.pageNo + 1,//更新成功后页数增加
          isTop:istop
        })
        wx.hideLoading()
      }
    })
  },
  /**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    if(this.data.isTop == 0){
      this.upList(0)
    }else if(this.data.isTop == 1){
      this.upList(1)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})