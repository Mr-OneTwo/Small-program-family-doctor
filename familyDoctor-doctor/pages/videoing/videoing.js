// pages/videoing/videoing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statu:1,
    btnstatu:1,
    video_me:"../../images/video_me.jpg",
    video_doctor:"../../images/video_doctor.png",
    num:1,
    numMe:1,
    tab: 0
  },

  //点击页面使页面整洁显示
  full:function(){
    var that = this;
    var top1 = that.data.statu;
    var top2 = that.data.btnstatu;
    if(top1==1){
      top1 = 0;
      top2 = 0;
    } else {
      top1 = 1;
      top2 = 1;
    }
    this.setData({
      statu:top1,
      btnstatu:top2
    })
  },

  //点击小图切换大小图
  tabSwitch: function (e) {
    if (this.data.tab == 0) {
      if (e.currentTarget.dataset.id == 1) {
        this.setData({
          tab: 1
        })
        console.log(e)
      }
    } else {
      if (e.currentTarget.dataset.id == 0) {
        this.setData({
          tab: 0
        })
        console.log(e)
      }
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