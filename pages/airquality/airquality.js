var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area: '',
    co: '',
    ct: '',
    no2: '',
    o3: '',
    o3h: '',
    pm10: '',
    pm25: '',
    quality: '',
    so2: '',
    aqi: '',
    area_code: '',
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let thisPage = this;
    app.getAirQualityInfo(function (data) {
      if (data.showapi_res_code == 0) {
        let pm = data.showapi_res_body.pm;
        console.log(data)
        console.log(data.showapi_res_body.pm)
        thisPage.setData({
          area: pm.area,
          co: pm.co,
          ct: pm.ct,
          aqi: pm.aqi,
          no2: pm.no2,
          o3: pm.o3,
          o3h: pm.o3_8h,
          pm10: pm.pm10,
          pm25: pm.pm2_5,
          quality: pm.quality,
          so2: pm.so2,
          area_code: pm.area_code
        })
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