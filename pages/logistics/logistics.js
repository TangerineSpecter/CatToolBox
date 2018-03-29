// pages/logistics/logistics.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    expressNu: null,
    expressInfo: null,
    reason: '',
    expressType: 0,
    inputValue: '',
    array: ['顺丰', '百世', '中通', '申通', '圆通', '韵达', '邮政', 'EMS', '天天', '京东', '国通', '优速', '德邦', '申通', '快捷', '宅急送'],
    index: 0,
    inputShowed: false,
    inputVal: ""
  },

  queryClick: function () {
    var thispage = this;
    app.getExpressInfo(this.data.expressNu, this.data.expressType, function (data) {
      console.log(data.Traces == '')
      if (data.Success != false && data.Traces != '') {
        this.setData({
          inputVal: "",
          inputShowed: false,
          reason: '',
          expressInfo: data
        });
      } else if (data.Success == true && data.Traces == '') {
        thispage.setData({
          inputVal: "",
          inputShowed: false,
          reason: data.Reason
        });
      } else {
        thispage.setData({
          inputVal: "",
          inputShowed: false,
          reason: "请输入订单号！"
        });
      }
      console.log(data)
    })
  },

  /**
   * 清除输入框
   */
  clearClick: function () {
    this.setData({ inputValue: '' });
  },

  /**
   * 输入框
   */
  input: function (data) {
    this.setData({ expressNu: data.detail.value });
  },

  /**
   * 展示输入框
   */
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  /**
   * 隐藏输入框
   */
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },

  /**
   * 选择快递
   */
  bindPickerChange: function (e) {
    var type = e.detail.value;
    switch (type) {
      case '0':
        console.log('顺丰');
        this.setData({ expressType: 'SF' });
        break;
      case '1':
        console.log('百世');
        this.setData({ expressType: 'HTKY' });
        break;
      case '2':
        console.log('中通');
        this.setData({ expressType: 'ZTO' });
        break;
      case '3':
        console.log('申通');
        this.setData({ expressType: 'STO' });
        break;
      case '4':
        console.log('圆通');
        this.setData({ expressType: 'YTO' });
        break;
      case '5':
        console.log('韵达');
        this.setData({ expressType: 'YD' });
        break;
      case '6':
        console.log('邮政');
        this.setData({ expressType: 'YZPY' });
        break;
      case '7':
        console.log('EMS');
        this.setData({ expressType: 'EMS' });
        break;
      case '8':
        console.log('天天');
        this.setData({ expressType: 'HHTT' });
        break;
      case '9':
        console.log('京东');
        this.setData({ expressType: 'JD' });
        break;
      case '10':
        console.log('全峰');
        this.setData({ expressType: 'QFKD' });
        break;
      case '11':
        console.log('国通');
        this.setData({ expressType: 'GTO' });
        break;
      case '12':
        console.log('优速');
        this.setData({ expressType: 'UC' });
        break;
      case '13':
        console.log('德邦');
        this.setData({ expressType: 'DBL' });
        break;
      case '14':
        console.log('快捷');
        this.setData({ expressType: 'FAST' });
        break;
      case '15':
        console.log('宅急送');
        this.setData({ expressType: 'ZJS' });
        break;
    }
    this.setData({ index: e.detail.value })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '物流查询'
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