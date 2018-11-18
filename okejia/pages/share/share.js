// pages/share/share.js
var app = getApp();
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
var homeInfo = [['1室', '2室', '3室', '4室', '5室'], ['1厅', '2厅', '3厅', '4厅', '5厅'], ['1厨', '2厨', '3厨', '4厨', '5厨'], ['1卫', '2卫', '3卫', '4卫', '5卫']];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag_id: '',
    codeDis: false,
    phoneCode: "获取验证码",
    telephone: "",
    codePhone: "",
    village: '',
    area: '',
    tabShow: false,
    houseShow: false,
    rn: '',
    pn: '',
    cn: '',
    tn: '',
    houseVal: [0, 0, 0, 0],
    parlourNum: 1,
    roomNum: 1,
    cookNum: 1,
    toiletNum: 1,
    orderSuccess: false,
    animationData: {},
    value: [0, 0],
    provinces: [],
    citys: [],
    cityName: '选择您所在的城市',
    citySelect: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (wx.getStorageSync('userData') == '') {
      wx.hideShareMenu();
    }
    that.setData({
      homeInfo: homeInfo,
      tag_id: options.tag_id
    });
    //城市选择
    const provinces = [];
    const citys = [];
    that.setData({
      cityData: oke.cityData
    })
    var cityData = that.data.cityData;
    const _provinces = cityData
    const _citys = _provinces[0].children
    that.setData({
      provinces: _provinces,
      citys: _citys
    })
  },

  // 点击所在地区弹出选择框
  selectDistrict: function (e) {
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(680).step()
    this.setData({
      animationData: animation.export(),
      citySelect: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  // 点击地区选择取消按钮
  cityCancel: function (e) {
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(680).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        citySelect: false
      })
    }.bind(this), 200)
  },
  // 点击地区选择确定按钮
  citySure: function () {
    var that = this;
    var value = that.data.value;
    var areaInfo  = that.data.provinces[value[0]].name + '-' + that.data.citys[value[1]];
    that.setData({
      cityName: areaInfo,
      citySelect: false
    });
  },
  // 处理省市县联动逻辑
  cityChange: function (e) {
    var that = this
    var value = e.detail.value;
    var provinceNum = value[0]
    var cityNum = value[1]
    if (this.data.value[0] != provinceNum) {
      this.setData({
        value: [provinceNum, 0],
        citys: that.data.provinces[provinceNum].children,
      })
      console.log(that.data.areas)
    } else if (this.data.value[1] != cityNum) {
      this.setData({
        value: [provinceNum, cityNum],
      })
    }
  },
  //获取填入的手机号
  phoneinput(e) {
    this.setData({
      telephone: e.detail.value
    })
  },
  //获取填入的验证码
  codeinput(e) {
    var that = this;
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
      url: weburl + `/wx/VerifyCode/code.koala`,
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

  //小区名称
  village: function (e) {
    var that = this;
    var spaceReg = /\s+/g;
    that.setData({
      village: e.detail.value.replace(spaceReg, '')
    })
  },

  //房屋面积
  area: function (e) {
    var that = this;
    var spaceReg = /\s+/g;
    that.setData({
      area: e.detail.value.replace(spaceReg, '')
    });
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
  //确定选择装修户型
  homeSure: function () {
    var that = this;
    var rn = that.data.rn;
    var pn = that.data.pn;
    var cn = that.data.cn;
    var tn = that.data.tn;
    var homeInfo = that.data.homeInfo;
    if (rn == '' && pn == '' && cn == '' && tn == '') {
      that.setData({
        roomNum: Number(homeInfo[0][0].slice(0, 1)),
        parlourNum: Number(homeInfo[1][0].slice(0, 1)),
        cookNum: Number(homeInfo[2][0].slice(0, 1)),
        toiletNum: Number(homeInfo[3][0].slice(0, 1)),
        houseShow: false
      });
    } else {
      that.setData({
        roomNum: Number(rn.slice(0, 1)),
        parlourNum: Number(pn.slice(0, 1)),
        cookNum: Number(cn.slice(0, 1)),
        toiletNum: Number(tn.slice(0, 1)),
        houseShow: false
      });
    }
  },
  //选择装修户型
  houseSelect: function (e) {
    const val = e.detail.value
    var homeInfo = this.data.homeInfo
    this.setData({
      rn: homeInfo[0][val[0]],
      pn: homeInfo[1][val[1]],
      cn: homeInfo[2][val[2]],
      tn: homeInfo[3][val[3]],
      houseVal: val
    });
  },

  //提交预约信息
  sendInfo: function (e) {
    var that = this;
    var areaReg = /(^[1-9]{1}[0-9]*$)|(^[0-9]*\.[0-9]{2}$)/;//正则 请输入大于0的整数或者保留两位小数
    var telReg = /^[1][3,4,5,7,8][0-9]{9}$/;//正则 有效手机号
    var cityName=that.data.cityName;
    var telephone = that.data.telephone;
    var codePhone = that.data.codePhone;
    var village = that.data.village;
    var area = that.data.area;
    var postInfo = {};
    if (cityName == '选择您所在的城市') {
      app.showErrorModal('提示', '请填写您所在城市');
      return false;
    }else{
      if (cityName.indexOf('-') !== -1) {
        var cityNameAry = cityName.split('-');
        cityName = cityNameAry[cityNameAry.length - 1];
      } else {
        cityName = areaInfo;
      }
    }
    if (telephone == '') {
      app.showErrorModal('提示', '请填写您的联系方式');
      return false;
    }
    if (!telReg.test(telephone)) {
      app.showErrorModal('提示', '请填写的联系方式格式不正确');
      return false;
    }
    if (codePhone == '') {
      app.showErrorModal('提示', '请填写手机验证码');
      return false;
    }
    if (village.length == 0) {
      app.showErrorModal('提示', '请填写您的小区名称');
      return false;
    }
    if (area == '') {
      app.showErrorModal('提示', '请填写您的房屋面积');
      return false;
    }
    if (!areaReg.test(area)) {
      app.showErrorModal('提示', '房屋面积请填写大于0的整数或者保留两位小数');
      return false;
    }
    postInfo['cityName'] = cityName;
    postInfo['city'] = cityName;
    postInfo['cellName'] = that.data.village;
    postInfo['area'] = Number(that.data.area);
    postInfo['mobile'] = that.data.telephone;
    postInfo['VerifyCode'] = that.data.codePhone;
    postInfo['info'] = that.data.roomNum + '室' + that.data.parlourNum + '厅' + that.data.cookNum + '厨' + that.data.toiletNum + '卫';
    postInfo['district'] = '';
    postInfo['invite'] = that.data.tag_id;
    postInfo['type'] = 0;
    app.showLoading('信息提交中...');
    wx.request({
      url: weburl + `/wx/Recommend/register.koala`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: postInfo,
      success: function (res) {
        wx.hideLoading();
        if (res.data.status == 200) {
          if (res.data.data.ticketFlag) {
            that.setData({
              deduction: res.data.data.deduction
            });
            wx.showToast({
              title: res.data.data.message,
              icon: 'loading',
              duration: 2000,
              success: function () {
                that.setData({
                  orderSuccess: true
                })
              }
            });
          } else {
            wx.showToast({
              title: res.data.data.message,
              icon: 'loading',
              duration: 2000,
              success: function () {
                that.setData({
                  tabShow: true
                })
              }
            });
          }
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'loading',
            duration: 2000
          });
        }
      },
      fail: function () {
        wx.hideLoading();
        wx.showToast({
          title: '系统开小差',
          icon: 'loading'
        });
      }
    });
  },
  //取消折扣弹窗
  cancleMask: function () {
    var that = this;
    that.setData({
      tabShow: true,
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
    var userId = wx.getStorageSync('userData').id;
    return {
      title: '邀请客户',
      imageUrl: 'https://www.okejia.com/upload/share/new-share.jpg',
      path: '/pages/share/share?tag_id=' + userId,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})