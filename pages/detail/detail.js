// 获取数据
import dataList from '../../utils/data.js'

Page({
  data: {
    dataItem: {},
    actIndex: 0,
    showBack: false
  },
  onLoad(ev) {
    if (ev.hasOwnProperty('id')) {
      this.setData({
        dataItem: dataList[ev.id],
        actIndex: ev.id
      })
    } else {
      wx.showToast({
        title: '缺少参数id',
        icon: 'none'
      })
    }
    if (ev.share) {
      this.setData({
        showBack: true
      })
    }
  },
  backIndex () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  onShareAppMessage(res) {
    let title = this.data.dataItem.title
    let imageUrl = this.data.dataItem.pic
    return {
      title: title,
      path: `pages/detail/detail?id=${this.data.actIndex}&share=1`,
      imageUrl: imageUrl
    }
  }
})
