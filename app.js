//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log("工具箱启动成功...")
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },

  getExpressInfo: function (nu, cb) {
    console.log("物流查询")
    wx.request({
      url: 'https://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx',
      data: {
        'EBusinessID': '',
        'RequestData': '%7b%22LogisticCode%22%3a%22'+nu+'%22%2c%22ShipperCode%22%3a%22ZTO%22%7d',
        'RequestType': '1002',
        'DataSign': "YTQxMGYxYzc4NDc2Y2JkMzMyNjg2YWU4MzdhMmIwZWU%3d",
        'DataType': '2'
      },
      header: {
        
      },
      success: function (res) {
        //console.log(res.data)
        cb(res.data)
      }
    })
  }
})