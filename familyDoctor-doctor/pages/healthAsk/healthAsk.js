Page({

    data: {
        face_img: "../../images/face_img_1.jpg",
        face_img_his: "../../images/face_img_2.jpg",
        statu: 0,
        voice:[
          {
            img:"../../images/voice-white.png",
            statu:0
          }
        ],
        unread:[
          {
            statu: 0
          }
        ]
    },
    play: function () {
      var that = this;
      var idstatas = that.data.voice;
      var idunread = that.data.unread;
      if (idstatas[0].statu == 0) {
        idstatas[0].img = "../../images/voice-white.gif";
        idstatas[0].statu = 1;
        idunread[0].statu = 1;
      } else {
        idstatas[0].img = "../../images/voice-white.png";
        idstatas[0].statu = 0;
      }
      this.setData({
        voice:idstatas,
        unread: idunread
      })
    },

    //以上为语音播放点击事件
    
    onLoad: function (options) {

    },
    imgToggle:function(){
        var that = this;
        if (that.data.statu==0){
            that.setData({
                statu:1
            })
        }else{
            that.setData({
                statu: 0
            })
        }
    },
     //弹窗
    showModal: function () {
        // 显示遮罩层
        var animation = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        })
        this.animation = animation
        animation.translateY(300).step()
        this.setData({
            animationData: animation.export(),
            showModalStatus: true
        })
        setTimeout(function () {
            animation.translateY(0).step()
            this.setData({
                animationData: animation.export()
            })
        }.bind(this), 10)
        this.imgToggle()
    },
    hideModal: function () {
        // 隐藏遮罩层
        var animation = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        })
        this.animation = animation
        animation.translateY(300).step()
        this.setData({
            animationData: animation.export(),
        })
        setTimeout(function () {
            animation.translateY(0).step()
            this.setData({
                animationData: animation.export(),
                showModalStatus: false
            })
        }.bind(this), 10)
        this.imgToggle()
    },

})