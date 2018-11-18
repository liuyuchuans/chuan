// pages/measure/measure.js
var app = getApp();
var weburl = app.weburl;
var oke = require('../../utils/oke.js');
var homeInfo = [['1室', '2室', '3室', '4室', '5室'], ['1厅', '2厅', '3厅', '4厅', '5厅'], ['1厨', '2厨', '3厨', '4厨', '5厨'], ['1卫', '2卫', '3卫', '4卫', '5卫']];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    village: '',
    area: '',
    telephone: '',
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

    value: [0, 0, 0],
    provinces: [],
    citys: [],
    cityName: '请选择',
    citySelect: false,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var cityData = app.city.data.data;
    that.setData({
      homeInfo: homeInfo,
    });
    //城市选择
    const provinces = [];
    const citys = [];
    that.setData({
      cityData: cityData
    })
    var cityData = that.data.cityData;
    const _provinces = cityData
    const _citys = _provinces[0].children
    const _cityscounty = _provinces[0].children[0].children
    // 城市选者初始化数据
    that.setData({
      provinces: _provinces,
      citys: _citys,
      countys: _cityscounty
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
    var areaInfo = that.data.provinces[value[0]].name + '-' + that.data.citys[value[1]].name + '-' + that.data.countys[value[2]].name;
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
    var countys = value[2]
    if (this.data.value[0] != provinceNum) {
      this.setData({
        value: [provinceNum, 0 , 0],
        citys: that.data.provinces[provinceNum].children,
        countys: that.data.provinces[provinceNum].children[0].children
      })
    } else if (this.data.value[1] != cityNum) {
      this.setData({
        value: [provinceNum, cityNum ,0],
        countys: that.data.provinces[provinceNum].children[cityNum].children
      })
    } else if (this.data.value[2] != countys){
      this.setData({
        value: [provinceNum, cityNum, countys]
      })
    }
  },
  //获取填入的手机号
  phoneinput(e) {
    this.setData({
      telephone: e.detail.value
    })
  },
  //姓名
  name: function (e) {
    var that = this;
    var spaceReg = /\s+/g;
    that.setData({
      name: e.detail.value.replace(spaceReg, '')
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
    var areaReg = /(^[1-9]{1}[0-9]*$)|(^[0-9]*\.[0-9]{2}$)/;
    var telReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    var cityName = that.data.cityName;
    var telephone = that.data.telephone;
    var codePhone = that.data.codePhone;
    var village = that.data.village;
    var name = that.data.name;
    var area = that.data.area;
    var postInfo = {};
    if (name.length == 0) {
      app.showErrorModal('提示', '请填写您的姓名');
      return false;
    }
    if (cityName == '请选择') {
      app.showErrorModal('提示', '请选择您所在城市');
      return false;
    }
    if (village.length == 0) {
      app.showErrorModal('提示', '请填写您的所属小区');
      return false;
    }
    if (telephone == '') {
      app.showErrorModal('提示', '请填写您的联系电话');
      return false;
    }
    if (!telReg.test(telephone)) {
      app.showErrorModal('提示', '请填写的联系方式格式不正确');
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
    postInfo['type'] = 3;
    postInfo['provinceId'] = that.data.provinces[that.data.value[0]].provinceId; //省id
    postInfo['cityId'] = that.data.citys[that.data.value[1]].cityId;    //市 id
    postInfo['countyId '] = (that.data.countys[that.data.value[2]]) ? that.data.countys[that.data.value[2]].countyId : ''; // 县 id
    postInfo['name'] = name;  
    postInfo['city'] = cityName;
    postInfo['cellName'] = that.data.village;
    postInfo['mobile'] = that.data.telephone;
    postInfo['area'] = Number(that.data.area);
    postInfo['info'] = that.data.roomNum + '室' + that.data.parlourNum + '厅' + that.data.cookNum + '厨' + that.data.toiletNum + '卫';
    app.showLoading('信息提交中...');
    wx.request({
      url: weburl + `/wx/CustomerInfo/save.koala`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: postInfo,
      success: function (res) {   
        wx.hideLoading();
        if (res.data.status == 200) {
          wx.showModal({
            title: '提示',
            content: '信息提交成功',
            showCancel: false,
            success: function () {
              wx.navigateBack({
                delta: 1
              });
            }
          });
        } else {
          wx.showModal({
            title: '提示',
            content: '信息提交失败，请重试',
            showCancel: false,
          });
        }
      },
      fail: function () {
        wx.hideLoading();
        wx.showToast({
          title: '系统开小差',
          icon: 'loading',
          duration: 4000
        });
      }
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
      title: '免费设计',
      imageUrl: 'https://www.okejia.com/upload/share/new-share.jpg',
      path: '/pages/measure/measure',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})