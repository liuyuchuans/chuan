const app = getApp()
var weburl = app.weburl;
// pages/look/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listAll: [],
    contentAll: [],
    selectList: [],
    selectShow: false,
    selectKey: null,
  },
// 点击下拉框
openSelect(e){
if (this.data.selectKey != e.target.dataset.index){//如果点击的不是当前下拉则弹出
  this.setData({//
    selectList: e.target.dataset.val,
    selectShow: true,
    selectKey: e.target.dataset.index,
  })
}else{
  this.setData({
    selectShow: !this.data.selectShow,
  })
}
// 如果下拉框显示，则更换图标
if(this.data.selectShow){
  var list = this.data.listAll
  for (var i in list) {
    list[i].navImg = '/img/look/down.png'
  }
  list[this.data.selectKey].navImg = '/img/look/on.png';
  this.setData({
    listAll:list
  })
}else{
  var list = this.data.listAll
  list[this.data.selectKey].navImg = '/img/look/down.png';
  this.setData({
    listAll: list
  })
}
},
// 美图详情页
  toGalleryDetail(e){
    var id = e.currentTarget.dataset.id;
    var category = e.currentTarget.dataset.cate;
    wx.navigateTo({
      url: '../../gallery_detail/gallery_detail?id=' + id + '&category=' + category
    })
  },
// 选中项
choice(e){
  var that = this
  var cho = this.data.listAll;
  var key = this.data.selectKey;//分类下标
  var index = e.target.dataset.index;//下拉列表下标
  var cate = cho[key].params[index].id;//id拼接
  cho[key].name = e.target.dataset.name;//选中的分类名称
  cho[key].navImg = '/img/look/down.png';//选中后修改小图标
  cho[key].cateId = cate;
  this.setData({
    listAll:cho,
    selectShow: false,
  })
  // 分类过滤
  var category = ''
  for(var i in cho){
    if(cho[i].cateId){
      if (category == ''){
        category = cho[i].cateId
      }else{
        category = category + ',' + cho[i].cateId
      }
      
    }
  }
  wx.request({
    url: weburl + '/wx/ProComBo/pageJson.koala',
    method:'GET',
    data:{
      pageNo:"0",
      category: category
    },
    success:function(res){
      var list = res.data.data.all.data;
      that.setData({
        contentAll:list
      })
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 导航栏请求
    wx.request({
      url: weburl + '/wx/ProComBo/Taginfo.koala',
      method:"GET",
      success:function(res){
        var list = res.data.data;
        for(var i in list){
          list[i].navImg = '/img/look/down.png'
        }
        that.setData({
          listAll : list
        })
      }
    })

    // 默认数据请求
    wx.request({
      url: weburl + '/wx/ProComBo/pageJson.koala',
      method:'GET',
      data:{
        pageNo:0
      },
      success:function(res){
        that.setData({
          contentAll : res.data.data.all.data
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