var count = 0;
var clickNum = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    version: '0.9.7',
    text: '小样，别碰我喵~'
  },

  /**
   * 演示页面
   */
  testClick: function () {
    count++;
    if (count % 10 == 0) {
      wx.navigateTo({
        url: '../demo/demo'
      });
    }
  },

  /**
   * logo点击效果
   */
  logoClick: function () {
    var thisPage = this;
    switch (clickNum) {
      case 1:
        thisPage.setData({ text: '都说了，不要碰我喵！' });
        break;
      case 2:
        thisPage.setData({ text: '你还碰我！！！' });
        break;
      case 3:
        thisPage.setData({ text: '你有完没完了喵！' });
        break;
      case 4:
        thisPage.setData({ text: 'ヽ(ｏ`皿′ｏ)ﾉ讨厌，喵~' });
        break;
      case 5:
        thisPage.setData({ text: '再碰我，信不信我咬你喵！' });
        break;
      case 6:
        thisPage.setData({ text: '(๑ŐдŐ)【咬】' });
        break;
      case 7:
        thisPage.setData({ text: '别碰我了，我告诉你一个秘密喵~' });
        break;
      case 8:
        thisPage.setData({ text: '按住我有宝藏哟喵~好啦，别烦我了喵！' });
        break;
      case 9:
        thisPage.setData({ text: 'ヾ(Ő∀Ő๑)ﾉ【滚】' });
        break;
    }
    //clickNum++;
    wx.showToast({
      title: thisPage.data.text,
      icon: 'none',
      duration: 2000
    });
  },

  logoLongClick: function () {
    wx.navigateTo({
      url: '../2048/2048',
    })
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