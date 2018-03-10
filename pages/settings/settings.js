// pages/settings/settings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  showHelp:function(){
    console.log('帮助');
    wx.navigateTo({
      url: '../help/help',
    })
  },

  showInfo:function(){
    console.log('关于');
    wx.navigateTo({
      url: '../about/about',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var thisPage = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo //用户基本信息
        thisPage.setData({ userInfo: userInfo })
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