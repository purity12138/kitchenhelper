// pages/index6/index6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:"/MyImages/niupai.jpg",
    foodName:"牛排",
    tag:"肉",
    views:5000,
    praise:4000,
    activenum:0,
    steps: [
      {
        text: '步骤一',
        desc: '描述信息hhhhhhhhhhhhhhhhhhh',
      },
      {
        text: '步骤二',
        desc: '描述信息',
      },
      {
        text: '步骤三',
        desc: '描述信息',
      },
      {
        text: '步骤四',
        desc: '描述信息',
      },
      {
        text: '步骤五',
        desc: '描述信息',
      },
    ]
  },


  buttonclick(){
    this.setData({
      activenum:this.data.activenum+1
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