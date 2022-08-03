// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    current:1,
    bannerArr:[],
    list:[],
  },
  swiperChange:function(e){
    
    this.setData({
      current:e.detail.current+1
    })
    
  },

  
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  //点击首页list列表 跳转到详情页
  tiao:function(e){
    console.log(e.currentTarget.dataset.mark);
    wx.navigateTo({
      
      url: '../detail/detail?id=' +e.currentTarget.dataset.mark,
    })
  },
  onLoad() {
    
    wx.request({
      url: 'http://iwenwiki.com:3002/api/banner',
      success:res=> {
        console.log(res.data)
        this.setData({bannerArr:res.data.data})
      }, })
      wx.showLoading({
        title: '数据拼命加载中',
      })

      wx.request({
        method:'get',
        url: 'http://iwenwiki.com:3002/api/indexlist',
        success:res=>{
          console.log(res.data)
          wx.showToast({
            title: '数据加载完毕',
          })
          this.setData({
            list:res.data.data
          })
          wx.hideLoading(
          )
        },
          
            
          
        
      })
   
    
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
