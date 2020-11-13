import { wxp } from './utils/index.js';

App({
  onLaunch () {
    
  },
  globalData: {
    userInfo: null,
    wxp: wxp,
    systemInfo: wx.getSystemInfoSync()
  }
})