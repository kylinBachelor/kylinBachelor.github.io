export const blogPostData = [{"path":"/article/jkfggc02/","title":"a","categoryList":[{"id":"098f6b","sort":10000,"name":"test"}],"tags":["markdown"],"createTime":"2024/11/30 14:56:18","lang":"zh-CN","excerpt":""},{"path":"/en/article/4x7xzbpb/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10001,"name":"preview"}],"tags":["markdown"],"createTime":"2024/11/30 14:15:41","lang":"en-US","excerpt":""},{"path":"/en/article/9if9x6t6/","title":"Custom Component","categoryList":[{"id":"5ebeb6","sort":10001,"name":"preview"}],"tags":["preview","component"],"createTime":"2024/11/30 14:15:41","lang":"en-US","excerpt":""},{"path":"/article/46taxetw/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10001,"name":"preview"}],"tags":["markdown"],"createTime":"2024/11/30 14:15:41","lang":"zh-CN","excerpt":""},{"path":"/article/y5fg1c8w/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10001,"name":"preview"}],"tags":["预览","组件"],"createTime":"2024/11/30 14:15:41","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}