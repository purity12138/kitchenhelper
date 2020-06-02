Page({
    /**
   * 页面的初始数据
   */
  data: {
    nav: [{
      title:'早餐',
      name: '早餐',
      img: "../../images/yjc/wu.png",
      id:1
    },
    {
      title:'午餐',
      name: '午餐',
      img: "../../images/yjc/zao.png",
      id:2
    },
    {
      title:'晚餐',
      name: '晚餐',
      img: "../../images/yjc/wan.png",
      id:3
    },    
    {
      title:'夜宵',
      name: '夜宵',
      img: "../../images/yjc/ye.png",
      id:4
    },    

  ],
    list: [{
      id: "1",
      img: "../../images/yjc/wu.png",
      name: '包子',
      type:1
    },
    {
      id: "2",
      parentId: "1005",
      img: "../../images/yjc/zao.png",
      name: '红烧肉',
      type:2
    },

    {
      id: "3",
      img: "../../images/yjc/wan.png",
      name: '啤酒鸭',
      type:3
    },
    {
      id: "4",
      img: "../../images/yjc/ye.png",
      name: '烧烤',
      type:4
    }
  ],
  curNav:0,
  curIndex:0
},

navTap(e){
  let id = e.currentTarget.dataset.id;
  console.log(id);
  this.setData({
    curNav: id,
    curIndex:id
  })
},

/**
 * 生命周期函数--监听页面加载
 */
onLoad: function () {

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
