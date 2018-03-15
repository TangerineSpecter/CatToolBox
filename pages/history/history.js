var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    time: '',
    historyList: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatDay(new Date());
    this.setData({ time: time });
    var thisPage = this;
    wx.setNavigationBarTitle({
      title: '历史上的今天'
    })
    app.getHistoryInfo(function (data) {
      if (data.showapi_res_code == 0) {
        //console.log(data)
        thisPage.setData({historyList:data.showapi_res_body.list});
        //console.log(thisPage.data.historyList);
        thisPage.setData({ loading: true });
      } else {
        thisPage.onLoad();
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

  }
})