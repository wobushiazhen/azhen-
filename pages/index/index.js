// index.js
const app = getApp()
Page({
  data: {
    selected: 0,
    navigationBarHeight: "",
    statusBarHeight: "",
    navMenuTop: "",
    navMenuHeight: "",
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuTop: app.globalData.menuTop,
    menuHeight: app.globalData.menuHeight,
  },
  onLoad() {
    this.setData({
      navigationBarHeight: wx.getStorageSync('navigationBarHeight'),
      statusBarHeight: wx.getStorageSync('statusBarHeight'),
      navMenuTop: wx.getStorageSync('menuTop'),
      navMenuHeight: wx.getStorageSync('menuHeight')
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0 // 控制哪一项是选中状态
      })
    }
  }
})