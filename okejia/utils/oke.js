
var weburl= `https://www.okejia.com`;
//获取当前时间
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('/');
};
//个位补零
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
};
//获取openid
function getOpenId(callback) {
  wx.login({
    success: function (res) {
      wx.request({
        url: weburl + `/wx/swipe/getData.koala`,
        data: { 'code': res.code },
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          if (res.data.status == 200) {
            var session = res.data.data;
            wx.request({
              url: weburl + `/wx/swipe/checkSession.koala`,
              data: { 'uid': session },
              method: 'POST',
              header: { 'content-type': 'application/x-www-form-urlencoded' },
              success: function (res) {
                if (res.data.status == 200) {
                  var openId = res.data.data;
                  callback(openId)   
                }
              },
              fail: function (res) {
              }
            })
          }
        },
        fail: function (error) { console.info(error); }
      })
    }
  })
};

//获取轮播图数据
function banners(mark, modules, callback){
  var timer = null;
  wx.request({
    url: weburl + `/wx/banner/list.koala`,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: {
      mark: mark,
      module: modules 
    },
    success: function (res) {
      if (res.data.status == 200) {
        if (res.data.data) {
          var bannerData = res.data.data;
          callback(bannerData)
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
  });
};

//生成预支付订单
function orderPay(openId,userId,orderId,types,callback) {
  var timer = null;
  wx.request({
    url: weburl + `/wx/PayMent/getPrepayId.koala`,
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: { openId: openId, userId: userId, orderId: orderId, type: types },
    success: function (res) {
      if (res.data.status == 200) {
        var payData = res.data.data
        callback(payData)
      }
      if (res.data.status == 500){
        wx.showModal({
          title: res.data.message,
          content: '可在我的->项目信息列表->订单详情查看',
          showCancel:false,
          success:function(){
            wx.switchTab({
              url: '../user/user',
            })
          }
        })
      }
    },
    fail: function () {
      app.showLoading('系统开小差');
      clearTimeout(timer);
      timer = setTimeout(function () {
        wx.hideLoading();
      }, 2000);
    }
  })
}; 
var cityData = [
  { name: '安徽', children: ['阜阳', '合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'] },
  { name: '北京', children: ['北京'] },
  { name: '重庆', children: ['重庆'] },
  { name: '福建', children: ['福州', '厦门', '三明', '莆田', '泉州', '漳州', '南平', '龙岩', '宁德'] },
  { name: '广西', children: ['百色', '南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '贺州', '河池', '来宾', '崇左'] },
  { name: '贵州', children: ['黔东南苗族侗族自治州', '贵阳', '六盘水', '遵义', '安顺', '铜仁', '毕节', '黔西南布依族苗族自治州', '黔南布依族苗族自治州'] },
  { name: '广东', children: ['云浮', '广州', '深圳', '珠海', '汕头', '韶关', '河源', '梅州', '惠州', '汕尾', '东莞', '中山', '江门', '佛山', '阳江', '湛江', '茂名', '肇庆', '清远', '潮州', '揭阳'] },
  { name: '甘肃', children: ['甘南藏族自治州', '兰州', '金昌', '白银', '天水', '嘉峪关', '武威', '张掖', '平凉', '酒泉', '庆阳', '定西', '陇南', '临夏回族自治州'] },
  { name: '海南', children: ['保亭黎族苗族自治县', '南沙群岛', '西沙群岛', '中沙群岛的岛礁及其海域', '海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '琼中黎族苗族自治县'] },
  { name: '湖北', children: ['武汉', '黄石', '襄阳', '十堰', '荆州', '宜昌', '荆门', '鄂州', '孝感', '黄冈', '咸宁', '随州', '仙桃', '天门', '潜江', '神农架林区', '恩施土家族苗族自治州'] },
  { name: '黑龙江', children: ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭'] },
  { name: '河南', children: ['郑州', '鹤壁', '开封', '洛阳', '平顶山', '焦作', '新乡', '安阳', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'] },
  { name: '河北', children: ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水', '任丘'] },
  { name: '湖南', children: ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'] },
  { name: '江苏', children: ['南京', '徐州', '连云港', '淮安', '宿迁', '盐城', '扬州', '泰州', '南通', '镇江', '常州', '无锡', '苏州', '昆山', '丹阳', '宜兴', '太仓', '张家港', '江阴', '常熟'] },
  { name: '吉林', children: ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'] },
  { name: '江西', children: ['南昌', '景德镇', '萍乡', '新余', '九江', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'] },
  { name: '辽宁', children: ['本溪', '沈阳', '大连', '鞍山', '抚顺', '丹东', '锦州', '葫芦岛', '营口', '盘锦', '阜新', '辽阳', '铁岭', '朝阳'] },
  { name: '内蒙古', children: ['乌兰察布', '锡林郭勒盟', '巴彦淖尔', '阿拉善盟', '兴安盟', '呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔'] },
  { name: '宁夏', children: ['银川', '石嘴山', '吴忠', '中卫', '固原'] },
  { name: '澳门', children: ['澳门'] },
  { name: '青海', children: ['西宁', '海东', '海北藏族自治州', '黄南藏族自治州', '海南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'] },
  { name: '四川', children: ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '宜宾', '广安', '达州', '巴中', '眉山', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州', '雅安'] },
  { name: '陕西', children: ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'] },
  { name: '上海', children: ['上海'] },
  { name: '山东', children: ['聊城', '滨州', '菏泽', '潍坊', '日照', '济南', '青岛', '淄博', '枣庄', '东营', '烟台', '威海', '济宁', '泰安', '莱芜', '德州', '临沂'] },
  { name: '山西', children: ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '忻州', '临汾', '运城', '吕梁'] },
  { name: '台湾', children: ['台湾'] },
  { name: '天津', children: ['天津'] },
  { name: '西藏', children: ['拉萨', '那曲', '昌都', '山南', '日喀则', '阿里', '林芝'] },
  { name: '香港', children: ['香港'] },
  { name: '新疆', children: ['乌鲁木齐', '克拉玛依', '石河子', '阿拉尔', '图木舒克', '五家渠', '吐鲁番', '哈密', '和田', '阿克苏', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州', '伊犁哈萨克自治州', '喀什', '阿勒泰地区', '塔城地区'] },
  { name: '云南', children: ['昆明', '曲靖', '玉溪', '保山', '昭通', '普洱', '临沧', '丽江', '文山壮族苗族自治州', '红河哈尼族彝族自治州', '西双版纳傣族自治州', '楚雄彝族自治州', '大理白族自治州', '德宏傣族景颇族自治州', '怒江傈傈族自治州', '迪庆藏族自治州'] },
  { name: '浙江', children: ['宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '舟山', '台州', '丽水', '杭州', '衢州', '义乌'] }
];

module.exports = {
  formatTime: formatTime,
  getOpenId: getOpenId,
  banners: banners,
  orderPay: orderPay,
  cityData: cityData
};