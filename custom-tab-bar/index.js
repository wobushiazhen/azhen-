Component({
  data: {
    selected: 0,
    color: "#4C4848",
    selectedColor: "#EB9E9E",
    list: [{
        pagePath: "/pages/index/index",
        text: "知识库",
        iconPath: "/static/images/more.png",
        selectedIconPath: "/static/images/more-selected.png"
      }, 
      {
        pagePath: "/pages/mySquare/mySquare",
        text: "摸鱼广场",
        iconPath: "/static/images/target.png",
        selectedIconPath: "/static/images/target-selected.png"
      }, 
      {  
        pagePath: "/pages/community/community",
        text: "社区",
        iconPath: "/static/images/user.png",
        selectedIconPath: "/static/images/user-selected.png"
      }
    ]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setData({
        selected:data.index 
      })
      wx.switchTab({
        url
      })
    }
  }
})