import comp from "C:/Users/kylinBachelor/Desktop/my-project/docs/.vuepress/.temp/pages/test/a.html.vue"
const data = JSON.parse("{\"path\":\"/test/a.html\",\"title\":\"a\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"a\",\"tags\":[\"markdown\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"test/a.md\",\"categoryList\":[{\"id\":\"098f6b\",\"sort\":10001,\"name\":\"test\"}],\"bulletin\":false}")
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
