//app.js author:丢失的橘子
var logistics_key = require('utils/config.js').logistics_key;
var logistics_address = require('utils/config.js').logistics_address;
var EBusinessID = require('utils/config.js').EBusinessID;
var api_url = require('utils/config.js').logistics_address;

var showapi_appid = require('utils/config.js').showapi_appid;
var showapi_sign = require('utils/config.js').showapi_sign;
var const_url = require('utils/config.js').const_url;

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
    var apikey = logistics_key;
    var jsonData = {
      'LogisticCode': nu,
      'ShipperCode': type
    }
    var sign = JSON.stringify(jsonData) + apikey;
    var DataSign = Base64.encode(MD5.hexMD5(sign));
    var RequestData = escape(JSON.stringify(jsonData));

    wx.request({
      url: logistics_address,
      data: {
        'EBusinessID': EBusinessID,
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
  getConstInfo: function (star,cb) {
    wx.request({
      url: const_url,
      data: {
        'showapi_appid': showapi_appid,
        'showapi_sign': showapi_sign,
        'star': star
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