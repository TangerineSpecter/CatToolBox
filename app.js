//app.js author:丢失的橘子
var config = require('utils/config.js');
var Base64 = require('utils/base64.modified.js');
var MD5 = require('/utils/md5.js')

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

  //物流查询
  getExpressInfo: function (nu, type, cb) {
    var apikey = config.logistics_key;
    var jsonData = {
      'LogisticCode': nu,
      'ShipperCode': type
    }
    var sign = JSON.stringify(jsonData) + apikey;
    var DataSign = Base64.encode(MD5.hexMD5(sign));
    var RequestData = escape(JSON.stringify(jsonData));

    wx.request({
      url: config.logistics_address,
      data: {
        'EBusinessID': config.EBusinessID,
        'RequestData': RequestData,
        'RequestType': '1002',
        'DataSign': DataSign,
        'DataType': '2'
      },
      header: {

      },
      success: function (res) {
        cb(res.data)
      }
    })
  },

  //星座查询
  getConstInfo: function (star, cb) {
    wx.request({
      url: config.const_url,
      data: {
        'showapi_appid': config.showapi_appid,
        'showapi_sign': config.showapi_sign,
        'star': star
      },
      header: {

      },
      success: function (res) {
        //console.log(res);
        cb(res.data)
      }
    })
  },

  //笑话查询
  getJokeInfo: function (page, cb) {
    var pageSize = 1;
    wx.request({
      url: config.joke_url,
      data: {
        'showapi_appid': config.showapi_appid,
        'showapi_sign': config.showapi_sign,
        'page': page,
        'maxResult': pageSize
      },
      header: {

      },
      success: function (res) {
        console.log(res);
        cb(res.data)
      }
    })
  },

  //图灵机器人
  getRebotInfo: function (info, cb) {
    var pageSize = 1;
    wx.request({
      url: config.rebot_url,
      data: {
        'showapi_appid': config.showapi_appid,
        'showapi_sign': config.showapi_sign,
        'info': info,
        'userid': 'userid'
      },
      header: {

      },
      success: function (res) {
        //console.log(res);
        cb(res.data)
      }
    })
  }
})