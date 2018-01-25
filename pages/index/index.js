Page({

  /**
   * 页面的初始数据
   */
  data: {

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
   * 提示弹窗
   */
  infoClick: function () {
    wx.showToast({
      title: '敬请期待',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载完成了");
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