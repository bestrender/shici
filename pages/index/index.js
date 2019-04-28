//index.js
// 获取数据
import dataList from '../../utils/data.js'

Page({
  data: {
    // 评论
    // pinglunData:[{
    //     username:'小明',
    //     usericon:'',
    //     content:'非常好，赞！'
    //   },
    //   {
    //     username: '小红',
    //     usericon: '',
    //     content: '到此一游到此一游到此一游到此一游到此一游到此一游到此一游到此一游到此一游到此一游到此一游'
    //   }],
    
    // 数据
    dataList: dataList,

    // 当前选中的
    actIndex: 0,

    // 轮播参数
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 0,
    circular: false
  },
  to_pinglun(){
    wx.showToast({
      title: '抱歉，评论功能正在开发中',
      icon:'none',
      duration:2000
    })
  },
  onLoad (ev) {
    if (ev.hasOwnProperty('id')) {
      this.setData({
        duration: 0,
        actIndex: ev.index
      })
    }
    setTimeout(() => {
      this.setData({
        duration: 200
      })
    }, 200)
  },
  swiperChange(e){
    // console.log(e)
    this.setData({
      actIndex: e.detail.current
    })
    // this.actIndex = e.detail.current
  },
  onShareAppMessage(res) {
    // if (res.from === 'button') {
    //   // 来自页面内转发按钮
    //   console.log(res.target)
    // }
    let title = this.data.dataList[this.data.actIndex].title
    let imageUrl = this.data.dataList[this.data.actIndex].pic
    return {
      title: title,
      path: `pages/detail/detail?id=${this.data.actIndex}&share=1`,
      imageUrl: imageUrl
    }
  }
})
