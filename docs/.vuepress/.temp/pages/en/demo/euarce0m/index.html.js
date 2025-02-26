import comp from "F:/my_source_code/kylinBachelor.github.io/docs/.vuepress/.temp/pages/en/demo/euarce0m/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/demo/euarce0m/\",\"title\":\"bar\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"bar\",\"createTime\":\"2024/11/30 14:15:41\",\"permalink\":\"/en/demo/euarce0m/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"en/notes/demo/bar.md\",\"categoryList\":[{\"id\":\"9cfefe\",\"sort\":10000,\"name\":\"en\"},{\"id\":\"cbbb6b\",\"sort\":10002,\"name\":\"notes\"},{\"id\":\"a1c882\",\"sort\":10037,\"name\":\"demo\"}],\"bulletin\":false}")
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
