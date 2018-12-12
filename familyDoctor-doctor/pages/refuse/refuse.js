// pages/refuse/refuse.js
Page({
  data: {
    array: ['请选择', '时间不合适', '上门地点不在服务范围内', '其他'],
    objectArray: [
      {
        id: 0,
        name: '时间不合适'
      },
      {
        id: 1,
        name: '上门地点不在服务范围内'
      },
      {
        id: 2,
        name: '其他'
      }
    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },


})
