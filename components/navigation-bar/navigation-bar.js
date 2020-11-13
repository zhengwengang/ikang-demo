import { navHeightInfo } from '../../utils/index'
const { statusBarHeight, navHeight } = navHeightInfo

Component({
  data: {
    style: {
      statusBarHeight: 320,
      backgroundColor: '#ff6603',
      navHeight: 64
    }
  },
  attached () {
    this.setData({
      'style.statusBarHeight': statusBarHeight,
      'style.navHeight': navHeight
    })
  }
})