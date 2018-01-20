Page({

  /**
   * 页面的初始数据
   */
  data: {
    btntext: '计算器',
    show: true,
    news: ["aaa", "bbb"]
  },

  btnClick: function () {
    console.log("按钮被点击了");
    var isshow = this.data.show;
    console.log(!isshow);
    if (isshow) {
      this.setData({ btntext: "开" })
    } else {
      this.setData({ btntext: "关" })
    }

    var newsdata = this.data.news;
    newsdata.shift();

    this.setData({ show: !isshow, news: newsdata });
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