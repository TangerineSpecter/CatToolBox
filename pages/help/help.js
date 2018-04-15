Page({
  data: {
    list: [
      {
        id: 'logistics',
        name: '物流查询',
        open: false,
        pages: ['输入订单号可以进行物流查询', '点击选择快递进行快递选择']
      },
      {
        id: 'constellation',
        name: '星座运势',
        open: false,
        pages: ['左右滑动图片进行星座选择']
      },
      {
        id: 'rebot',
        name: '小黄猫',
        open: false,
        pages: ['一款与小黄猫交流的趣味小功能']
      },
      {
        id: 'joke',
        name: '笑话大全',
        open: false,
        pages: ['可以看到很多有趣的笑话', '当前是随机的']
      },
      {
        id: 'history',
        name: '历史今日',
        open: false,
        pages: ['查看历史上的今天发生过什么有趣的事情', '点击图片进行大图预览']
      },
      {
        id: 'almanac',
        name: '黄历运势',
        open: false,
        pages: ['可以看看黄道吉日', '当前只支持2015~2020年的查询']
      },
      {
        id: 'wallpager',
        name: '每日壁纸',
        open: false,
        pages: ['由Bing每天提供的精美壁纸', '点击图片可以预览', '预览下长按图片进行保存']
      },
      {
        id: 'emotion',
        name: '颜文字',
        open: false,
        pages: ['可以组合出各种表情符号']
      },
      {
        id: 'calculator',
        name: '计算器',
        open: false,
        pages: ['一个很普通的计算器', "真的很普通，居然不能计算高数题，哼！"]
      },
      {
        id: 'translate',
        name: '文字翻译',
        open: false,
        pages: ['支持自动识别语种', '支持27种语言的翻译哟']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});
