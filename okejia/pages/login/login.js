// pages/login/login.js
const app = getApp();
var weburl = app.weburl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeDis: false,
    phoneCode: "获取验证码",
    telephone: "",
    codePhone: "",
    sureBg: '#c0c5d0',
    imgs:'../../img/login-on.png',
    agreen:true,
    pages:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //获取填入的手机号
  phoneinput(e) {
    this.setData({
      telephone: e.detail.value
    })
  },
  //获取填入的验证码
  codeinput(e) {
    var that=this;
    that.setData({
      codePhone: e.detail.value,
      sureBg: '#00d3ca'
    })
    if (e.detail.value == '') {
      that.setData({
        sureBg: 'rgba(0,0,0,0.2)'
      });
    }
  },
  //点击获取验证码
  changeCode() {
    var that = this
    let telephone = this.data.telephone
    if (telephone.length != 11 || isNaN(telephone)) {
      wx.showModal({
        content: "请输入有效的手机号码！",
        showCancel: false
      });
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
      return false;
    }
    this.setData({
      codeDis: true
    })

    //发送短信验证码
    wx.request({
      url: weburl +`/wx/VerifyCode/code.koala`,
      data: {
        mobile: this.data.telephone
      },
      success: function (res) {
        let data = res.data
        if (data.code != "N000000") {
          that.setData({
            codeDis: false
          })
          wx.showToast({
            title: data.respMessage,
            icon: "loading"
          })
          setTimeout(function () {
            wx.hideToast()
          }, 2000)
        } else {
          that.setData({
            phoneCode: 60
          })
          let time = setInterval(() => {
            let phoneCode = that.data.phoneCode
            phoneCode--
            that.setData({
              phoneCode: phoneCode
            })
            if (phoneCode == 0) {
              clearInterval(time)
              that.setData({
                phoneCode: "重新获取",
                codeDis: false,
              })
            }
          }, 1000)
        }
      }
    })
  },

 //验证码判断
 sureCode:function(){
    var that=this;
    var pages=that.data.pages;
    if (that.data.telephone !== '' && that.data.codePhone !== '' ){
      if (that.data.agreen == false){
        wx.showModal({
          content: "需同意OKE家用户使用协议！",
          showCancel: false
        });
        return false;
      }
      wx.request({
        url: weburl +`/wx/VerifyCode/check.koala`,
      data: { 
        'mobile': that.data.telephone,
        'VerifyCode': that.data.codePhone
      },
      success: function (res) {
        if(res.data.status == 200){
          wx.setStorageSync('userData', res.data.data);
          wx.setStorageSync('userImg', res.data.data.headImg);
          wx.showToast({
            title: '登录成功！',
            icon:'loading',
            duration: 4000,
            success:function(){
              wx.navigateBack({
                delta:1
              });
            }
          });
        }else{
          wx.setStorageSync('userData', '')
          wx.showToast({
            title: res.data.message,
            icon: 'loading',
            duration:3000
          });
        }
      },
      fail:function(err){
        console.info(err)
      }
    }) 
    }else{
      wx.showModal({
        content: "请填写正确的手机号和验证码！",
        showCancel: false
      });
    }
  },

  agreen:function(e){
    var that=this;
    var state=e.currentTarget.dataset.agreen
     if(state){
       that.setData({
          imgs:'../../img/login-off.png',
          agreen: !that.data.agreen
      }) 
    }else{
      that.setData({
        imgs: '../../img/login-on.png',
        agreen: !that.data.agreen
      })
    }
  },
  content:function(){
    var title='';
    var urls ='https://www.okejia.com/h5/agreement.html';
    wx.navigateTo({
      url: '../h5/h5?urls='+urls+'&title='+title,
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