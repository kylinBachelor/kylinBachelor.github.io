import comp from "F:/my_source_code/kylinBachelor.github.io/docs/.vuepress/.temp/pages/en/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/demo/\",\"title\":\"Demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Demo\",\"createTime\":\"2024/11/30 14:15:41\",\"permalink\":\"/en/demo/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"en/notes/demo/README.md\",\"categoryList\":[{\"id\":\"9cfefe\",\"sort\":10000,\"name\":\"en\"},{\"id\":\"cbbb6b\",\"sort\":10002,\"name\":\"notes\"},{\"id\":\"a1c882\",\"sort\":10024,\"name\":\"demo\"}],\"bulletin\":false}")
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
