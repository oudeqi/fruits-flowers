App({
  onLaunch(options) {
    console.log(options);
    console.log(this.globalData.userInfo);
  },
  globalData: {
    userInfo: 'userInfo'
  }
})