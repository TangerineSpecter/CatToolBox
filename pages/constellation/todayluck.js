// pages/constellation/todayluck.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,//类型
    info: null,//星座信息
    star: null,//星座
    summary_star: '',//综合指数
    love_star: '',//爱情指数
    money_star: '',//财富指数
    work_star: '',//工作指数
    grxz: '',//贵人星座
    lucky_num: '',//幸运数字
    lucky_time: '',//吉时
    lucky_direction: '',//吉利方位
    day_notice: '',//今日提醒
    general_txt: '',//运势简评
    love_txt: '',//爱情运势
    work_txt: '',//工作运势
    money_txt: '',//财富运势
    time: '',//时间
    lucky_color: ''//吉色
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type = options.type;
    var info = options.info;
    this.setData({ type: type });
    this.setData({ info: info.slice(0, 4) });
    var star = options.star;
    this.setData({ star: star });
    var thisPage = this;
    app.getConstInfo(this.data.star, function (data) {
      console.log(data.showapi_res_body.day.summary_star)
      var today = data.showapi_res_body.day;
      thisPage.setData({ summary_star: thisPage.getStar(today.summary_star) });
      thisPage.setData({ love_star: thisPage.getStar(today.love_star) });
      thisPage.setData({ money_star: thisPage.getStar(today.money_star) });
      thisPage.setData({ work_star: thisPage.getStar(today.work_star) });
      thisPage.setData({ grxz: today.grxz });
      thisPage.setData({ lucky_num: today.lucky_num });
      thisPage.setData({ lucky_time: today.lucky_time });
      thisPage.setData({ lucky_direction: today.lucky_direction });
      thisPage.setData({ day_notice: today.day_notice });
      thisPage.setData({ love_txt: today.love_txt });
      thisPage.setData({ work_txt: today.work_txt });
      thisPage.setData({ money_txt: today.money_txt });
      thisPage.setData({ time: today.time });
      thisPage.setData({ lucky_color: today.lucky_color });
      thisPage.setData({ general_txt: today.general_txt });
    });
  },

  /**
   * 获取星星数
   */
  getStar: function (starNum) {
    var star = '';
    for (var i = 0; i < starNum; i++) {
      star += '⭐';
    }
    return star;
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