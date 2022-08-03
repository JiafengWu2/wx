// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {objinfo:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('url地址:',options)
    wx.request({
      url: 'http://iwenwiki.com:3002/api/indexlist/detail',
      data:{
        id:options.id
      },
      success:res=>{
        console.log(res.data[0]);
        //动态设置当前页面标题
        wx.setNavigationBarTitle({
          title:res.data[0].title,
        })
        this.setData({
          objinfo:res.data[0]
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})