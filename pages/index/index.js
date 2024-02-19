// index.js
const {
  debounced
} = require('../../utils/util')
const app = getApp()
Page({
  data: {
    selected: 0,
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuTop: app.globalData.menuTop,
    menuHeight: app.globalData.menuHeight,
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0 // 控制哪一项是选中状态
      })
    }
  },

  debouncedSearch:debounced(() => {
    // 发请求 
  }, 1000),

  
  onSearch(e) { 
    // 调用包装后的事件处理函数
    this.debouncedSearch() 
  }
})