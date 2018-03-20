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
    app.getWallpaperInfo(page, function (data) {
      if (data != null) {
        thisPage.getImageData(data);
      } else {
        thisPage.onLoad();
      }
    });
    wx.setNavigationBarTitle({
      title: '每日壁纸'
    })
  },

  //组装参数
  getImageData: function (data) {
    var thisPage = this;
    var images = [];
    var url_head = 'https://cn.bing.com/';
    for (var i = 0; i < data.images.length; i++) {
      var wallPage = new Object();
      var image = data.images[i];
      wallPage.url = url_head + image.url;
      wallPage.content = thisPage.getContent(image.copyright);
      wallPage.author = thisPage.getAuchor(image.copyright);
      wallPage.time = thisPage.getDate(image.enddate);
      wallPage.index = thisPage.getIndex(image.enddate);
      images.push(wallPage);
      thisPage.setData({ wallPageList: images });
      //console.log(thisPage.data.wallPageList)
    }
  },

  //处理时间
  getDate: function (date) {
    var time = '';
    time += date.substring(0, 4) + "-";
    time += date.substring(4, 6) + "-";
    time += date.substring(6);
    return time;
  },

  //处理作者信息
  getAuchor: function (data) {
    return data.substring(data.indexOf('(') + 2, data.indexOf(')'));
  },

  //处理简介
  getContent: function (data) {
    return data.substring(0, data.indexOf('('));
  },

  //处理序号
  getIndex: function (data) {
    var index = 0;
    var year = data.substring(0, 4);
    var month = data.substring(4, 6);
    var day = data.substring(6);
    //console.log(new Date(2016, 2, 0).getDate());
    return (this.getTotalDay(parseInt(year), parseInt(month)) + parseInt(day));
  },

  //处理总共时间
  getTotalDay: function (year, month) {
    var total = 0;
    var thisPage = this;
    total = total + new Date(year, month - 1, 0).getDate();
    if (month > 0) {
      thisPage.getTotalDay(month - 1);
    }
    return total;
  },

  /**
   * 预览图片
   */
  previewImage: function (e) {
    console.log(e)
    var current = e.target.dataset.src;
    var img = new Array();
    img[0] = current;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: img // 需要预览的图片http链接列表  
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