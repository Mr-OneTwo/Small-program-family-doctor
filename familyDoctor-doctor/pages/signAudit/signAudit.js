// pages/signAudit/signAudit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    floor1: [
      {
        statu: 0,
        id: 0,
        name: "儿童"
      },
      {
        statu: 0,
        id: 1,
        name: "孕产妇"
      },
      {
        statu: 1,
        id: 2,
        name: "高血压"
      },
      {
        statu: 1,
        id: 3,
        name: "糖尿病"
      },
      {
        statu: 0,
        id: 4,
        name: "老年人"
      },
      {
        statu: 0,
        id: 5,
        name: "重症精神病"
      }
    ]
  },
  chooseFloor1: function (e) {
    var that = this;
    var statas = e.currentTarget.dataset.id;
    var idstatas = that.data.floor1;
    for (var i = 0; i < idstatas.length; i++) {
      if (idstatas[i].id == statas) {
        if (idstatas[i].statu == 0) {
          idstatas[i].statu = 1;
        } else {
          idstatas[i].statu = 0;
        }
      }
    }
    this.setData({
      floor1: idstatas
    })
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