import comp from "C:/Users/kylinBachelor/Desktop/my-project/docs/.vuepress/.temp/pages/notes/demo/foo.html.vue"
const data = JSON.parse("{\"path\":\"/notes/demo/foo.html\",\"title\":\"foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2024/11/30 14:15:41\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"notes/demo/foo.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10002,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10006,\"name\":\"demo\"}],\"bulletin\":false}")
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
