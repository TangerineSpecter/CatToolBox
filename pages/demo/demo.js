Page({

  /**
   * 页面的初始数据
   */
  data: {
    btntext: '点击按钮',
    show: true,
    news: ["aaa", "bbb","ccc","ddd","eee","fff","ggg"]
  },

  view1click: function (event) {
    console.log('view1被长按了')
    console.log(event)
  },

  view2click: function () {
    console.log('view2被点击了')
    console.log(this.data.news)
    var news = this.data.news;
    var res = [];
    for (var i = 0, len = news.length; i < len; i++) {
      var j = Math.floor(Math.random() * news.length);
      res[i] = news[j];
      news.splice(j, 1);
    }
    this.setData({news:res})
    console.log(res);
  },

  view3click: function () {
    console.log('view3被点击了')
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