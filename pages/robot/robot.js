var app = getApp();
var util = require('../../utils/util.js');
var centent = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    message: '',
    centendata: '',
    nickName: '',
    avatarUrl: '',
    news_input_val: '',
    headimg: '../../img/rebot/head.jpg',
    botMessage: '你好，喵~'
  },

  //发送消息
  add: function () {
    if (this.data.news_input_val == '') {
      wx.showToast({
        title: '请输入发送内容',
        duration: 2000,
        icon: 'none'
      });
      return;
    }
    var time = util.formatTime(new Date());
    var centendata = {
      time: time,
      centend: this.data.message,
      is_show: 1
    }
    var length = this.data.centendata.length;
    if (length == 0) {
      centent[0] = centendata;
    } else {
      centent[length] = centendata;
    }
    this.setData({ centendata: centent });
    this.setData({ news_input_val: '' });
    this.rebotMessage(this.data.message);
  },

  rebotMessage: function (message) {
    console.log(message)
    var thisPage = this;
    app.getRebotInfo(message, function (data) {
      thisPage.setData({ botMessage: data.showapi_res_body.text });
      var time = util.formatTime(new Date());
      var bot = {
        time: time,
        centend: thisPage.data.botMessage,
        is_show: 0
      }
      var length = thisPage.data.centendata.length;
      centent[length] = bot;
      thisPage.setData({ centendata: centent });
      thisPage.bottom();
    });
  },

  //输入框信息
  bindChange: function (e) {
    this.setData({ message: e.detail.value });
    this.setData({ news_input_val: e.detail.value });
  },

  // 获取buttom的id节点然后屏幕焦点调转到这个节点
  bottom: function () {
    var query = wx.createSelectorQuery()
    query.select('#buttom').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      wx.pageScrollTo({
        scrollTop: res[0].bottom  // #the-id节点的下边界坐标  
      })
      res[1].scrollTop // 显示区域的竖直滚动位置  
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ avatarUrl: options.avatarUrl });
    this.setData({ nickName: options.nickName });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({ centendata: '' });
    centent = [];
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