import comp from "F:/my_source_code/kylinBachelor.github.io/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"en/README.md\",\"categoryList\":[{\"id\":\"9cfefe\",\"sort\":10000,\"name\":\"en\"}],\"bulletin\":false}")
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
