var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gongli: '',
    nongli: '',
    ganzhi: '',
    nayin: '',
    shengxiao: '',
    xingzuo: '',
    sheng12: '',
    zhiri: '',
    chongsha: '',
    tszf: '',
    pzbj: '',
    jrhh: '',
    yi: '',
    ji: '',
    jsyq: '',
    jieqi24: '',
    jieri: '',
    t1: '',
    t3: '',
    t5: '',
    t7: '',
    t9: '',
    t11: '',
    t13: '',
    t15: '',
    t17: '',
    t19: '',
    t21: '',
    t23: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var thisPage = this;
    var date = options.date;
    app.getAlmanacInfo(date, function (data) {
      var info = data.showapi_res_body;
      if (data.showapi_res_code == 0) {
        console.log(data)
        thisPage.setData({ gongli: info.gongli });
        thisPage.setData({ nongli: info.nongli });
        thisPage.setData({ ganzhi: info.ganzhi });
        thisPage.setData({ nayin: info.nayin });
        thisPage.setData({ shengxiao: info.shengxiao });
        thisPage.setData({ xingzuo: info.xingzuo });
        thisPage.setData({ sheng12: info.sheng12 });
        thisPage.setData({ zhiri: info.zhiri });
        thisPage.setData({ chongsha: info.chongsha });
        thisPage.setData({ tszf: info.tszf });
        thisPage.setData({ pzbj: info.pzbj });
        thisPage.setData({ jrhh: info.jrhh });
        thisPage.setData({ yi: info.yi });
        thisPage.setData({ ji: info.ji });
        thisPage.setData({ jsyq: info.jsyq });
        thisPage.setData({ jieqi24: info.jieqi24 });
        thisPage.setData({ jieri: info.jieri });
        thisPage.setData({ t1: info.t1 });
        thisPage.setData({ t3: info.t3 });
        thisPage.setData({ t5: info.t5 });
        thisPage.setData({ t7: info.t7 });
        thisPage.setData({ t9: info.t9 });
        thisPage.setData({ t11: info.t11 });
        thisPage.setData({ t13: info.t13 });
        thisPage.setData({ t15: info.t15 });
        thisPage.setData({ t17: info.t17 });
        thisPage.setData({ t19: info.t19 });
        thisPage.setData({ t21: info.t21 });
        thisPage.setData({ t23: info.t23 });
      } else {
        thisPage.onLoad();
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