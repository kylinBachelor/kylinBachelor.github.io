export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"title\":\"kylinBachelor\",\"lang\":\"zh-CN\",\"description\":\"不积跬步无以至千里，不积小流无以成江海\"},\"/en/\":{\"title\":\"kylinBachelor\",\"lang\":\"en-US\",\"description\":\"Stay Hungry Stay Foolish\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}