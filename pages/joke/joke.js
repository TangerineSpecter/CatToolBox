var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    joke: '',
    title: '',
    page: 1,
    loading: false
  },

  randomClick: function () {
    var page = parseInt((Math.random() * this.data.page));
    var thisPage = this;
    thisPage.setData({ loading: false });
    app.getJokeInfo(page, function (data) {
      thisPage.setData({ title: data.showapi_res_body.contentlist[0].title });
      thisPage.setData({ joke: data.showapi_res_body.contentlist[0].text });
      thisPage.setData({ loading: true });
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = parseInt((Math.random() * 500));
    var thisPage = this;
    wx.setNavigationBarTitle({
      title: '笑话大全'
    })
    app.getJokeInfo(page, function (data) {
      thisPage.setData({ title: data.showapi_res_body.contentlist[0].title });
      thisPage.setData({ joke: data.showapi_res_body.contentlist[0].text });
      thisPage.setData({ page: data.showapi_res_body.allPages });
      thisPage.setData({ loading: true });
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