Page({
  openToast: function () {
    wx.showToast({
      title: 'none',
      icon: 'success',
      duration: 3000
    });
  },
  openLoading: function () {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 1000
    });
  }
});