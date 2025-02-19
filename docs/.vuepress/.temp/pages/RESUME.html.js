import comp from "F:/my_source_code/kylinBachelor.github.io/docs/.vuepress/.temp/pages/RESUME.html.vue"
const data = JSON.parse("{\"path\":\"/RESUME.html\",\"title\":\"RESUME\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"RESUME\",\"createTime\":\"2020/06/30 09:00:33\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.1,\"words\":29},\"filePathRelative\":\"RESUME.md\",\"categoryList\":[],\"bulletin\":false}")
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
