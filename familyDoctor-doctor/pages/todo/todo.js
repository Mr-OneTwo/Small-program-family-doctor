// pages/HReminder/HRminder.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    currentTab: 0,//标签初始化
    list_personal: [
      {
        fa: "li",
        url: "../tohome/tohome",
        img: "../../images/todo_1.png",
        text: "上门服务",
        num:5
      },
      {
        fa: "li",
        url: "../publicRemind/publicRemind",
        img: "../../images/todo_2.png",
        text: "公卫提醒",
        num: 6
      },
      {
        fa: "li",
        url: "",
        img: "../../images/todo_3.png",
        text: "健康提醒",
        num: 24
      },
      {
        fa: "li_no",
        url: "",
        img: "../../images/todo_4.png",
        text: "家庭病床",
        num: 2
      },
      {
        fa:"li_no",
        url: "",
        img: "../../images/todo_5.png",
        text: "健康评估",
        num: 2
      }
    ],
    list_personal_2: [
      {
        fa: "li",
        url: "../tohome/tohome",
        img: "../../images/todo_1.png",
        text: "上门服务",
        num: 7
      },
      {
        fa: "li",
        url: "../publicRemind/publicRemind",
        img: "../../images/todo_2.png",
        text: "公卫提醒",
        num: 3
      },
      {
        fa: "li",
        url: "",
        img: "../../images/todo_3.png",
        text: "健康提醒",
        num: 18
      },
      {
        fa: "li_no",
        url: "",
        img: "../../images/todo_4.png",
        text: "家庭病床",
        num: 4
      },
      {
        fa: "li_no",
        url: "",
        img: "../../images/todo_5.png",
        text: "健康评估",
        num: 5
      }
    ]
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
      console.log(e);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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