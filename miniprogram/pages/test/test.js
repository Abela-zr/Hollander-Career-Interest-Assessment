// pages/page_01/page_01.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    realIndex:0,
    optionA: "A",
    optionB: "B",
    A: 0,
    B: 0,
    xianshixing:0,
    yanjiuxing:0,
    yishuxing:0,
    shehuixing:0,
    qiyexing:0,
    changguixing:0,
    questionDetail: app.globalData.question[0].question,
    answerA: app.globalData.question[0].option.A,
    answerB: app.globalData.question[0].option.B,
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
    listAB : ['A','B']
  },
  answerClickA: function () {
    if (this.data.listAB[0] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    if(this.data.index == 0 ){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }
    if(this.data.index == 1){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }
    if(this.data.index == 2){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }
    if(this.data.index == 3){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 4){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 5){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }if(this.data.index == 6){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }if(this.data.index == 7){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }if(this.data.index == 8){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }if(this.data.index == 9){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 10){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 11){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }if(this.data.index == 12){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }if(this.data.index == 13){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }if(this.data.index == 14){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }if(this.data.index == 15){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 16){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 17){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }if(this.data.index == 18){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }if(this.data.index == 19){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }if(this.data.index == 20){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }if(this.data.index == 21){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 22){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 23){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }if(this.data.index == 24){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }if(this.data.index == 25){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }if(this.data.index == 26){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }if(this.data.index == 27){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 28){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 29){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }if(this.data.index == 30){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }if(this.data.index == 31){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }if(this.data.index == 32){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }if(this.data.index == 33){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 34){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 35){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }if(this.data.index == 36){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }if(this.data.index == 37){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }if(this.data.index == 38){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }if(this.data.index == 39){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 40){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 41){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }if(this.data.index == 42){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }if(this.data.index == 43){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }if(this.data.index == 44){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }if(this.data.index == 45){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 46){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 47){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }if(this.data.index == 48){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }if(this.data.index == 49){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }if(this.data.index == 50){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }if(this.data.index == 51){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 52){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 53){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }if(this.data.index == 54){
      this.setData({
        xianshixing: this.data.xianshixing +1
      })
    }if(this.data.index == 55){
      this.setData({
        yanjiuxing: this.data.yanjiuxing +1
      })
    }if(this.data.index == 56){
      this.setData({
        yishuxing: this.data.yishuxing +1
      })
    }if(this.data.index == 57){
      this.setData({
        shehuixing: this.data.shehuixing +1
      })
    }if(this.data.index == 58){
      this.setData({
        qiyexing: this.data.qiyexing +1
      })
    }if(this.data.index == 59){
      this.setData({
        changguixing: this.data.changguixing +1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index+1],
    })
   
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listAB[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listAB[1]],
    })
    if (this.data.index == 60) {
      wx.redirectTo({
        url: '../result/result?xianshixing='+this.data.xianshixing+'&yanjiuxing='+this.data.yanjiuxing+'&yishuxing='+this.data.yishuxing+'&shehuixing='+this.data.shehuixing+'&qiyexing='+this.data.qiyexing+'&changguixing='+this.data.changguixing,
      })
    }
  },
  answerClickB: function () {
    if (this.data.listAB[0] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index+1],
    })
   
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listAB[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listAB[1]],
    })
    if (this.data.index == 60) {
      wx.redirectTo({
        url: '../result/result',
      })
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