import comp from "C:/Users/kylinBachelor/Desktop/my-project/docs/.vuepress/.temp/pages/en/demo/b7wpopuh/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/demo/b7wpopuh/\",\"title\":\"foo\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2024/11/30 14:15:41\",\"permalink\":\"/en/demo/b7wpopuh/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"en/notes/demo/foo.md\",\"bulletin\":false}")
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
