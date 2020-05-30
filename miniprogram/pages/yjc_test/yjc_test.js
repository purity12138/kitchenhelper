// miniprogram/pages/yjc_test/yjc_test.js
const DB=wx.cloud.database().collection("star")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addData(){
    DB.add({
      data:{
        menuid:'1',
        uid:'1'
      },
      success(res){
        console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败",res)
      }      
    })    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.addData()
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