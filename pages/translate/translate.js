var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    result: '',
    number: 0,
    initInfo: "英文",
    resultInfo: "中文"
  },

  inputtext: function (e) {
    //console.log(e.detail.value);
    this.setData({ text: e.detail.value });
    this.setData({ number: e.detail.value.length });
  },

  submit: function () {
    var text = this.data.text;
    if (text.trim() == '') {
      wx.showToast({
        title: '请输入翻译内容',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    var thisPage = this;
    app.getTranslateInfo(text, function (data) {
      console.log(data.trans_result);
      thisPage.setData({ result: data.trans_result[0].dst });
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '文字翻译'
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