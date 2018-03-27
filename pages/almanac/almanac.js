
let chooseYear = null;
let chooseMonth = null;
const conf = {
  data: {
    hasEmptyGrid: false,
    showPicker: false
  },
  onLoad() {
    const date = new Date();
    const curYear = date.getFullYear();
    const curMonth = date.getMonth() + 1;
    const weeksCh = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(curYear, curMonth);
    this.calculateDays(curYear, curMonth);
    this.setData({
      curYear,
      curMonth,
      weeksCh
    });
  },
  /**
   * 获取这个月第一天
   */
  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  /**
   * 获取每周第一天
   */
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  /**
   * 初始化日历
   */
  calculateEmptyGrids(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });
    }
  },
  /**
   * 获取日
   */
  calculateDays(year, month) {
    let days = [];

    const thisMonthDays = this.getThisMonthDays(year, month);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push({
        day: i,
        choosed: false
      });
    }

    this.setData({
      days
    });
  },
  /**
   * 获取年月
   */
  handleCalendar(e) {
    const handle = e.currentTarget.dataset.handle;
    const curYear = this.data.curYear;
    const curMonth = this.data.curMonth;
    if (handle === 'prev') {
      let newMonth = curMonth - 1;
      let newYear = curYear;
      if (newMonth < 1) {
        newYear = curYear - 1;
        newMonth = 12;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        curYear: newYear,
        curMonth: newMonth
      });
    } else {
      let newMonth = curMonth + 1;
      let newYear = curYear;
      if (newMonth > 12) {
        newYear = curYear + 1;
        newMonth = 1;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        curYear: newYear,
        curMonth: newMonth
      });
    }
  },
  /**
   * 选择天
   */
  tapDayItem(e) {
    const idx = e.currentTarget.dataset.idx;
    const days = this.data.days;
    for (let i = 0; i < days.length; i++) {
      days[i].choosed = false;
    }
    days[idx].choosed = !days[idx].choosed;
    this.setData({
      days,
      showPicker: true,
      day: days[idx].day
    });
  },
  /**
   * 选择改变
   */
  pickerChange(e) {
    const val = e.detail.value;
    chooseYear = this.data.pickerYear[val[0]];
    chooseMonth = this.data.pickerMonth[val[1]];
  },
  /**
   * 提交按钮
   */
  tapPickerBtn(e) {
    const type = e.currentTarget.dataset.type;
    const o = {
      showPicker: false,
    };
    if (type == 'confirm') {
      let month = this.data.curMonth;
      let day = this.data.day;
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      let date = String(this.data.curYear) + month + day;
      wx.navigateTo({
        url: '../almanac/fortune?date=' + date,
      })
    }
    this.setData(o);
  }
};
Page(conf);
