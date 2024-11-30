import comp from "C:/Users/kylinBachelor/Desktop/my-project/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"Theme Plume\",\"tagline\":\"VuePress Next Theme\",\"text\":\"A simple, feature-rich, document & blog\",\"actions\":[{\"theme\":\"brand\",\"text\":\"Blog\",\"link\":\"/en/blog/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/pengzhanbo/vuepress-theme-plume\"}]}}],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.14,\"words\":43},\"filePathRelative\":\"en/README.md\",\"categoryList\":[],\"bulletin\":false}")
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
