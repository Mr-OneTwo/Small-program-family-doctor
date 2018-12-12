// pages/JuneNewAdded/contractService/contractService.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currType: 0,
    types: [
      {
        id: 0,
        name: "初级包",
        txt:"所有人"
      },
      {
        id: 1,
        name: "基础服务包（中级包)",
        txt: "所有人"
      },
      {
        id: 2,
        name: "慢性肺包（中级包）",
        txt: "慢性呼吸道疾病患者"
      }
    ],
    right: [
      {
        id: 0,
        label:0,
        firtit: "健康宣传册",
        sectxt: "1次/年"
      },
      {
        id: 1,
        label: 0,
        firtit: "健康状况评估",
        sectxt: "2次/年"
      }, {
        id: 2,
        label: 0,
        firtit: "血常规",
        sectxt: "2次/年"
      }, {
        id: 3,
        label: 1,
        firtit: "上门巡视",
        sectxt: "2次/年"
      }, {
        id: 4,
        label: 0,
        firtit: "健康用品",
        sectxt: "1次/年"
      }
    ]
  },
  // 左侧点击切换
  tapType: function (e) {
    this.setData({
      currType: e.currentTarget.dataset.id
    })
  },

  // 右侧点击小绿点
  imgclick: function (e) {
    var that = this;
    var father = that.data.right;
    var xe = e.currentTarget.dataset.id;
    for (var i = 0; i < father.length; i++) {
      if (father[i].id == xe) {
        if (father[i].label == 1) {
          father[i].label = 0;
        } else {
          father[i].label = 1;
        }
      }
    }
    this.setData({
      right: father
    });
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