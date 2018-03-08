var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 1,
    info: '♈白羊座（3.21~4.19）',
    imageInfo: '../../img/constellation/1.jpg',
    star: 'baiyang',
    startPoint: [0, 0]
  },

  queryClick: function () {
    app.getConstInfo();
  },

  /**
   * 滑动开始
   */
  touchstart: function (e) {
    //开始触摸并放入触摸点数组中
    this.setData({ startPoint: [e.touches[0].pageX, e.touches[0].pageY] })
  },

  /**
   * 触摸移动
   */
  touchend: function (e) {
    var type = this.data.type;
    //当前触摸点坐标
    var curPoint = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    var startPoint = this.data.startPoint;
    //比较pageX的值
    if (curPoint[0] <= startPoint[0]) {
      type--;
      if (type == 0) {
        type = 12;
      }
    } else {
      type++;
      if (type == 13) {
        type = 1;
      }
    }
    this.setData({ type: type });
    switch (type) {
      case 1:
        this.setData({ info: '♈白羊座（3.21~4.19）' });
        this.setData({ star: 'baiyang' });
        this.setData({ imageInfo: '../../img/constellation/1.jpg' });
        break;
      case 2:
        this.setData({ info: '♉金牛座（4.20~5.20）' });
        this.setData({ star: 'jinniu' });
        this.setData({ imageInfo: '../../img/constellation/2.jpg' });
        break;
      case 3:
        this.setData({ info: '♊双子座（5.21~6.21）' });
        this.setData({ star: 'shuangzi' });
        this.setData({ imageInfo: '../../img/constellation/3.jpg' });
        break;
      case 4:
        this.setData({ info: '♋巨蟹座（6.22~7.22）' });
        this.setData({ star: 'juxie' });
        this.setData({ imageInfo: '../../img/constellation/4.jpg' });
        break;
      case 5:
        this.setData({ info: '♌狮子座（7.23~8.22）' });
        this.setData({ star: 'shizi' });
        this.setData({ imageInfo: '../../img/constellation/5.jpg' });
        break;
      case 6:
        this.setData({ info: '♍处女座（8.23~9.22）' });
        this.setData({ star: 'chunv' });
        this.setData({ imageInfo: '../../img/constellation/6.jpg' });
        break;
      case 7:
        this.setData({ info: '♎天秤座（9.23~10.23）' });
        this.setData({ star: 'tiancheng' });
        this.setData({ imageInfo: '../../img/constellation/7.jpg' });
        break;
      case 8:
        this.setData({ info: '♏天蝎座（10.24~11.22）' });
        this.setData({ star: 'tianxie' });
        this.setData({ imageInfo: '../../img/constellation/8.jpg' });
        break;
      case 9:
        this.setData({ info: '♐射手座（11.23~12.21）' });
        this.setData({ star: 'sheshou' });
        this.setData({ imageInfo: '../../img/constellation/9.jpg' });
        break;
      case 10:
        this.setData({ info: '♑摩羯座（12.22~1.19）' });
        this.setData({ star: 'mojie' });
        this.setData({ imageInfo: '../../img/constellation/10.jpg' });
        break;
      case 11:
        this.setData({ info: '♒水瓶座（1.20~2.18）' });
        this.setData({ star: 'shuiping' });
        this.setData({ imageInfo: '../../img/constellation/11.jpg' });
        break;
      case 12:
        this.setData({ info: '♓双鱼座（2.19~3.20）' });
        this.setData({ star: 'shuangyu' });
        this.setData({ imageInfo: '../../img/constellation/12.jpg' });
        break;
    }
  },

  /**
   * 十二星座滑动条
   */
  sliderChange: function (e) {
    var type = e.detail.value;
    this.setData({ type: type });
    switch (type) {
      case 1:
        this.setData({ info: '♈白羊座（3.21~4.19）' });
        this.setData({ star: 'baiyang' });
        this.setData({ imageInfo: '../../img/constellation/1.jpg' });
        break;
      case 2:
        this.setData({ info: '♉金牛座（4.20~5.20）' });
        this.setData({ star: 'jinniu' });
        this.setData({ imageInfo: '../../img/constellation/2.jpg' });
        break;
      case 3:
        this.setData({ info: '♊双子座（5.21~6.21）' });
        this.setData({ star: 'shuangzi' });
        this.setData({ imageInfo: '../../img/constellation/3.jpg' });
        break;
      case 4:
        this.setData({ info: '♋巨蟹座（6.22~7.22）' });
        this.setData({ star: 'juxie' });
        this.setData({ imageInfo: '../../img/constellation/4.jpg' });
        break;
      case 5:
        this.setData({ info: '♌狮子座（7.23~8.22）' });
        this.setData({ star: 'shizi' });
        this.setData({ imageInfo: '../../img/constellation/5.jpg' });
        break;
      case 6:
        this.setData({ info: '♍处女座（8.23~9.22）' });
        this.setData({ star: 'chunv' });
        this.setData({ imageInfo: '../../img/constellation/6.jpg' });
        break;
      case 7:
        this.setData({ info: '♎天秤座（9.23~10.23）' });
        this.setData({ star: 'tiancheng' });
        this.setData({ imageInfo: '../../img/constellation/7.jpg' });
        break;
      case 8:
        this.setData({ info: '♏天蝎座（10.24~11.22）' });
        this.setData({ star: 'tianxie' });
        this.setData({ imageInfo: '../../img/constellation/8.jpg' });
        break;
      case 9:
        this.setData({ info: '♐射手座（11.23~12.21）' });
        this.setData({ star: 'sheshou' });
        this.setData({ imageInfo: '../../img/constellation/9.jpg' });
        break;
      case 10:
        this.setData({ info: '♑摩羯座（12.22~1.19）' });
        this.setData({ star: 'mojie' });
        this.setData({ imageInfo: '../../img/constellation/10.jpg' });
        break;
      case 11:
        this.setData({ info: '♒水瓶座（1.20~2.18）' });
        this.setData({ star: 'shuiping' });
        this.setData({ imageInfo: '../../img/constellation/11.jpg' });
        break;
      case 12:
        this.setData({ info: '♓双鱼座（2.19~3.20）' });
        this.setData({ star: 'shuangyu' });
        this.setData({ imageInfo: '../../img/constellation/12.jpg' });
        break;
    }
  },

  /**
   * 十二星座跳转页
   */
  jump: function () {
    wx.navigateTo({
      url: '../constellation/todayluck?type='
      + this.data.type
      + '&info='
      + this.data.info
      + '&star='
      + this.data.star,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '星座运势'
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