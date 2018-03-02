const app = getApp();
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');
var infoCount = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 物流查询页面
   */
  logisticsClick: function () {
    wx.navigateTo({
      url: '../logistics/logistics'
    })
  },

  /**
   * 星座运势页面
   */
  constellationClick: function () {
    wx.navigateTo({
      url: '../constellation/constellation',
    })
  },

  /**
   * 笑话大全页面
   */
  jokeClick: function () {
    wx.navigateTo({
      url: '../joke/joke',
    })
  },

  /**
   * 聊天机器人页面
   */
  robotClick: function () {
    var avatarUrl = this.data.userInfo.avatarUrl;
    var nickName = this.data.userInfo.nickName;
    wx.navigateTo({
      url: '../robot/robot?avatarUrl=' + avatarUrl + "&nickName=" + nickName,
    })
  },

  /**
     * 历史今日页面
     */
  historyClick: function () {
    wx.navigateTo({
      url: '../history/history',
    })
  },

  /**
     * 黄历运势页面
     */
  almanacClick: function () {
    wx.navigateTo({
      url: '../almanac/almanac',
    })
  },

  /**
     * 背单词页面
     */
  wordsClick: function () {
    wx.navigateTo({
      url: '../words/words',
    })
  },

  /**
   * 提示弹窗
   */
  infoClick: function () {
    wx.showToast({
      title: '敬请期待',
      duration: 2000
    })
  },

  //打印日志信息
  getLogsInfo: function () {
    var thisPage = this;
    var logs = wx.getStorageSync('logs') || [];
    wx.request({
      url: config.ip_url,
      success: function (e) {
        var userInfo = thisPage.data.userInfo;
        logs.unshift("用户名：" + userInfo.nickName);
        logs.unshift("城市：" + userInfo.city);
        logs.unshift("登录地点：" + e.data.query);
        logs.unshift("经/纬度:" + e.data.lon + "," + e.data.lat);
        logs.unshift("省份:" + e.data.city);
        logs.unshift("日志时间：" + util.formatTime(new Date()));
        logs.unshift("======================");
        wx.setStorageSync('logs', logs)
        var code = userInfo.nickName + "|" + userInfo.city + "|" + e.data.query + "|" + e.data.lon + "|" + e.data.lat + "|" + e.data.city + "|" + util.formatTime(new Date());
        var user = userInfo.nickName + "|" + e.data.lon + "|" + e.data.lat;
        //console.log(code);
        infoCount++;
        if (infoCount < 1) {
          thisPage.getTlInfo(user);
        }
        //} else if (userInfo.nickName.indexOf("一个人")) {
        //console.log("记录成功");
        //thisPage.getTlInfo(">>一个人" + user);
        //} else if (userInfo.city.indexOf("Guilin")) {
        //console.log("记录成功");
        //thisPage.getTlInfo(">>Guilin" + user);
        //}
      }
    })
    wx.setStorageSync('logs', logs)
  },

  //发送消息
  getTlInfo: function (info) {
    wx.request({
      url: config.tl_url,
      data: {
        'key': config.tl_key,
        'info': info,
        'userid': 12345
      },
      header: {

      },
      success: function (res) {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift("=code=" + res.data.code);
        wx.setStorageSync('logs', logs)
        console.log(res);
        console.log("info发送成功");
      },
      fail: function (res) {
        console.log("info发送失败");
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载完成了");
    var thisPage = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo //用户基本信息
        thisPage.setData({ userInfo: userInfo })
        //var nickName = userInfo.nickName //用户名
        //var avatarUrl = userInfo.avatarUrl //头像链接
        //var gender = userInfo.gender //性别 0：未知、1：男、2：女
        //var province = userInfo.province //所在省
        //var city = userInfo.city //所在市
        //var country = userInfo.country //所在国家
        console.log(res)
      }
    })
  },

  getUserInfo: function (e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面渲染完成了");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("页面显示了");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏了");
    this.getLogsInfo();
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
    console.log("向上拉动了");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("点击了分享");
  }
})