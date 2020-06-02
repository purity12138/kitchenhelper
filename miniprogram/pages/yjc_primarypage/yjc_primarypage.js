Page({
  data: {
    imgurl:"./pic1.jpg",
    category: [{
      id: "37",
      parentId: "1005",
      img: "../../images/yjc/wu.png",
      name: '早餐'
    },
    {
      id: "38",
      parentId: "1005",
      img: "../../images/yjc/zao.png",
      name: '午餐'
    },
    // {
    //   id: "39",
    //   parentId: "1005",
    //   img: "../../images/yjc/xiawu.png",
    //   name: '下午茶'
    // },
    {
      id: "40",
      parentId: "1005",
      img: "../../images/yjc/wan.png",
      name: '晚餐'
    },
    {
      id: "41",
      parentId: "1005",
      img: "../../images/yjc/ye.png",
      name: '夜宵'
    }
  ],
    loadingHidden: true,
    active: 0,
    food:[{
      url:'./pic1.jpg'
    },
    {
      url:'./pic2.jpg'
    },
    {
      url:'./pic3.jpg'
    }],
    icon: {
      normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
      active: 'https://img.yzcdn.cn/vant/user-active.png',
    },
  },
  gotosmw(event){
    wx.navigateTo({
      url: '../smw_sort/smw_sort'
    })
  },
  onChange(event) {
    this.setData({ active: event.detail });
    console.log(event)
    if(event.detail==1){
      wx.switchTab({  
        url:'../b/b'          
      });  
    }
  },
  onReady(){
      loadingHidden: false
  }
});