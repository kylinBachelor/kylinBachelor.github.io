import comp from "C:/Users/kylinBachelor/Desktop/my-project/docs/.vuepress/.temp/pages/demo/sac2u8yt/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/sac2u8yt/\",\"title\":\"foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2024/11/30 14:15:41\",\"permalink\":\"/demo/sac2u8yt/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/demo/foo.md\",\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
