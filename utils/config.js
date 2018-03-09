var config = {
  //地址信息
  ip_url: `http://ip-api.com/json`,
  //快递鸟用户ID
  EBusinessID: `1321315`,
  //物流查询接口api_key
  logistics_key: `af0dfb94-bc6b-45f7-916e-31d200b36061`,
  //物流查询接口地址
  logistics_address: `https://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx`,

  //图灵机器人API
  tl_url: `https://tuling123.com/openapi/api`,
  //图灵机器人API_KEY
  tl_key: `dd5a9767cdd042acb96d8a9a2869714a`,

  //星座API_ID
  showapi_appid: `55010`,
  //星座API密钥
  showapi_sign: `d2c6e90be212498ba5358564f73c5d0f`,
  //星座API地址
  const_url: `https://route.showapi.com/872-1`,

  //笑话API地址
  joke_url: `https://route.showapi.com/341-1`,

  //图灵机器人API地址
  rebot_url: `https://route.showapi.com/60-27`,

  //历史上的今天API地址
  history_url: `https://route.showapi.com/119-42`,

  //黄历运势
  almanac_url: `https://route.showapi.com/856-1`
};

//对外把对象config返回
module.exports = config;