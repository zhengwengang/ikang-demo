const { statusBarHeight } = wx.getSystemInfoSync()
const menuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect()
const { bottom, top } = menuButtonBoundingClientRect
const paddingTop = top - statusBarHeight
const paddingBottom = paddingTop * 2
const navHeight = paddingBottom + bottom

export const navHeightInfo = {
  statusBarHeight,
  top,
  bottom,
  paddingTop,
  paddingBottom,
  navHeight,
}