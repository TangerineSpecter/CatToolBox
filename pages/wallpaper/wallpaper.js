var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    wallPageList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = 1;
    var thisPage = this;
    var images = [];
    var url_head = 'https://cn.bing.com/';
    app.getWallpaperInfo(page, function (data) {
      if (data != null) {
        for (var i = 0; i < data.images.length; i++) {
          var wallPage = new Object();
          //console.log(data);
          //console.log(data.images[i])
          var image = data.images[i];
          wallPage.url = url_head + image.url;
          wallPage.content = image.copyright;
          wallPage.time = image.enddate;
          wallPage.index = image.startdate;
          images.push(wallPage);
          console.log(images)
          thisPage.setData({ wallPageList: images });
          //console.log(thisPage.data.wallPageList)
        }
      } else {
        thisPage.onLoad();
      }
    });
  },

  //组装参数
  getImageData: function (data) {

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