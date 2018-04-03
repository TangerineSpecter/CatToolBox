var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    joke: '',
    title: '',
    loading: false,
    currentPage: 0
  },

  /**
   * 换一条
   */
  randomClick: function () {
    var page = parseInt((Math.random() * this.data.page));
    var thisPage = this;
    thisPage.setData({ loading: false });
    app.getJokeInfo(page, function (data) {
      if (data.showapi_res_code == 0) {
        thisPage.setData({
          title: data.showapi_res_body.contentlist[0].title,
          joke: data.showapi_res_body.contentlist[0].text,
          currentPage: data.showapi_res_body.currentPage,
          loading: true
        });
      } else {
        thisPage.randomClick();
      }
    });
  },

  /**
   * 左翻页
   */
  leftClick: function () {
    var page = parseInt(this.data.currentPage - 1);
    console.log(page)
    if (page < 0) {
      page = 0;
    }
    var thisPage = this;
    thisPage.setData({ loading: false });
    app.getJokeInfo(page, function (data) {
      if (data.showapi_res_code == 0) {
        thisPage.setData({
          title: data.showapi_res_body.contentlist[0].title,
          joke: data.showapi_res_body.contentlist[0].text,
          currentPage: data.showapi_res_body.currentPage,
          loading: true
        });
      } else {
        thisPage.randomClick();
      }
    });
  },

  /**
   * 右翻页
   */
  rightClick: function () {
    var page = parseInt(this.data.currentPage + 1);
    if (page > 8937) {
      page = 8937;
    }
    var thisPage = this;
    thisPage.setData({ loading: false });
    app.getJokeInfo(page, function (data) {
      if (data.showapi_res_code == 0) {
        thisPage.setData({
          title: data.showapi_res_body.contentlist[0].title,
          joke: data.showapi_res_body.contentlist[0].text,
          currentPage: data.showapi_res_body.currentPage,
          loading: true
        });
      } else {
        thisPage.randomClick();
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = parseInt((Math.random() * 500));
    var thisPage = this;
    app.getJokeInfo(page, function (data) {
      if (data.showapi_res_code == 0) {
        var joke = data.showapi_res_body.contentlist[0].text.replace(/<br \/>/g, "");
        thisPage.setData({
          title: data.showapi_res_body.contentlist[0].title,
          joke: joke,
          page: data.showapi_res_body.allPages,
          currentPage: data.showapi_res_body.currentPage,
          loading: true
        });
      } else {
        thisPage.randomClick();
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