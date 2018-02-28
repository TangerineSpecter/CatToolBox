var app = getApp();
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 2015; i <= 2020; i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: date.getMonth() + 1,
    days: days,
    day: date.getDate(),
    year: date.getFullYear(),
    value: [date.getFullYear() - 2015, date.getMonth(), date.getDate() - 1],
  },

  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '黄历运势'
    })
  },

  submitClick: function () {
    var month = this.data.month;
    var day = this.data.day;
    if (this.data.month < 10) {
      month = "0" + this.data.month;
    }
    if (this.data.day < 10) {
      day = "0" + this.data.day;
    }
    var date = String(this.data.year) + month + day;
    wx.navigateTo({
      url: '../almanac/fortune?date=' + date,
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