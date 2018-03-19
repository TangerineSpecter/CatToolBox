// example/demo/demo.js 
Page({

  /*
  *页面的初始数据 
  */
  data: {
    leftList: [], lefthand: 'ヾ',
    leftIndex: 0,
    rightList: [],
    righthand: 'ﾉヾ',
    rightIndex: 0,
    eyesList: [],
    eyes: '◕ ◕',
    eyesIndex: 0,
    mouthList: [],
    mouth: '∀',
    mouthIndex: 0,
    emotion: 'ヾ(o◕∀◕)ﾉヾ'
  },
  //左手 
  leftHand: function (e) {
    var type = e.currentTarget.dataset.type;
    var index = this.data.leftIndex;
    var length = this.data.leftList.length;
    var thisPage = this;
    if (type == 0) {
      console.log('左翻')
      if (index <= 0) {
        index = length;
      }
      thisPage.setData({ lefthand: thisPage.data.leftList[index - 1] });
      thisPage.setData({ leftIndex: index - 1 });
    } else {
      console.log('右翻');
      if (index >= length - 1) {
        index = -1;
      }
      thisPage.setData({ lefthand: thisPage.data.leftList[index + 1] });
      thisPage.setData({ leftIndex: index + 1 })
    }
    this.getEmotion();
  },

  //右手 
  rightHand: function (e) {
    var type = e.currentTarget.dataset.type;
    var index = this.data.rightIndex;
    var length = this.data.rightList.length;
    var thisPage = this;
    if (type == 0) {
      console.log('左翻')
      if (index <= 0) {
        index = length;
      }
      thisPage.setData({ righthand: thisPage.data.rightList[index - 1] });
      thisPage.setData({ rightIndex: index - 1 });
    } else {
      console.log('右翻');
      if (index >= length - 1) {
        index = -1;
      }
      thisPage.setData({ righthand: thisPage.data.rightList[index + 1] });
      thisPage.setData({ rightIndex: index + 1 })
    }
    this.getEmotion();
  },

  //眼睛 
  eyes: function (e) {
    var type = e.currentTarget.dataset.type;
    var index = this.data.eyesIndex;
    var length = this.data.eyesList.length;
    var thisPage = this;
    if (type == 0) {
      console.log('左翻')
      if (index <= 0) {
        index = length;
      }
      thisPage.setData({ eyes: thisPage.data.eyesList[index - 1] });
      thisPage.setData({ eyesIndex: index - 1 });
    } else {
      console.log('右翻');
      if (index >= length - 1) {
        index = -1;
      }
      thisPage.setData({ eyes: thisPage.data.eyesList[index + 1] });
      thisPage.setData({ eyesIndex: index + 1 })
    }
    this.getEmotion();
  },

  //嘴巴
  mouth: function (e) {
    var type = e.currentTarget.dataset.type;
    var index = this.data.mouthIndex;
    var length = this.data.mouthList.length;
    var thisPage = this;
    if (type == 0) {
      console.log('左翻')
      if (index <= 0) {
        index = length;
      }
      thisPage.setData({ mouth: thisPage.data.mouthList[index - 1] });
      thisPage.setData({ mouthIndex: index - 1 });
    } else {
      console.log('右翻');
      if (index >= length - 1) {
        index = -1;
      }
      thisPage.setData({ mouth: thisPage.data.mouthList[index + 1] });
      thisPage.setData({ mouthIndex: index + 1 })
    }
    this.getEmotion();
  },

  //组装表情 
  getEmotion: function () {
    var emotion = '';
    var lefthand = this.data.lefthand;
    var righthand = this.data.righthand;
    var eyes = this.data.eyes;
    var mouth = this.data.mouth;
    emotion = lefthand + '(' + eyes + ')' + righthand; emotion = emotion.replace(' ', mouth);
    this.setData({ emotion: emotion });
  },

  /**
  
  复制 */
  copy: function () {
    var thisPage = this;
    wx.setClipboardData({
      data: thisPage.data.emotion,
      success: function (res) {
        wx.showModal({ content: '复制成功', showCancel: false, });
      }
    })
  },
  /**
  
  生命周期函数--监听页面加载 */
  onLoad: function (options) { //初始化数据 
    this.getLeftList();
    this.getRightList();
    this.getMouthList();
    this.getEyesList();
  },
  //获取左手数据 
  getLeftList: function () {
    var leftList = ['', 'ヽ', 'w', 'ヾ', '凸', '♪', '╰', 'o', 'ㄟ', 'Ψ', '┗', 'ԅ', '┏', '＼', '₍₍◝', '╮', '~'];
    this.setData({ leftList: leftList })
  },

  //获取右手数据 
  getRightList: function () {
    var rightList = ['', 'ﾉヾ', 'w', '凸', '♪', 'ブ', 'づ╭❤～', '╯', 'o', 'و✧', 'ツ┏━┓', 'ㄏ', '~→', 'Ψ', '┛', 'ง', 'つBye', 'ﾉ(._.`)', '. z Z', '╭', '〃嗷~'];
    this.setData({ rightList: rightList })
  },

  //获取嘴巴数据 
  getMouthList: function () {
    var mouthList = ['∀', 'Д', 'ω', '﹏', '‿', '_,', 'ε(#', 'ㅂ', '(OO)', '皿', '▽', ', ', '3', 'ー', '_', '﹃', '＞ ＜', '△', '口', 'v', '～', '౪', 'O', '｡', '(●●)', '___,'];
    this.setData({ mouthList: mouthList });
  },

  //获取眼睛数据 
  getEyesList: function () {
    var eyesList = ['◕ ◕', '≧ ≦', 'X X', '┭┮ ┭┮', '﹁ ﹁', '=• •=', '◡ ◡', '￣ ￣', "•̀ •́", '° °', '▔ ▔', '○｀ ′○', '° °〃', '＠ ＠;', 'ˉ ￣～', '≖ ≖✿', 'T T', '´ `', '눈 눈', '⊙ ⊙', '゜ ゜', '° °|||', 'oﾟ ﾟ', '＠￣ ￣＠', '╯ ╰', '´◔ ◔', '~ ~', '∪ ∪', '◐ ◑', '﹀ ﹀'];
    this.setData({ eyesList: eyesList });
  },

  /**
  
  生命周期函数--监听页面初次渲染完成 */
  onReady: function () {
  },

  /**
  
  生命周期函数--监听页面显示 */
  onShow: function () {
  },

  /**
  
  生命周期函数--监听页面隐藏 */
  onHide: function () {
  },

  /**
  
  生命周期函数--监听页面卸载 */
  onUnload: function () {
  },

  /**
  
  页面相关事件处理函数--监听用户下拉动作 */
  onPullDownRefresh: function () {
  },

  /**
  
  页面上拉触底事件的处理函数 */
  onReachBottom: function () {
  },

  /**
  
  用户点击右上角分享 */
  onShareAppMessage: function () {
  }
})