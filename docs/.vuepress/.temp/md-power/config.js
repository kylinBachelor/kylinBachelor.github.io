import { defineClientConfig } from 'vuepress/client'
import Tabs from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import PDFViewer from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/PDFViewer.vue'
import Bilibili from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/Bilibili.vue'
import Youtube from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/Youtube.vue'
import Replit from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/Replit.vue'
import CodeSandbox from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/CodeSandbox.vue'
import Plot from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import CodeRepl from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/CodeRepl.vue'
import CanIUse from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/CanIUse.vue'
import FileTreeItem from 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import 'C:/Users/kylinBachelor/Desktop/kylinBachelor.github.io/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('PDFViewer', PDFViewer)
    app.component('VideoBilibili', Bilibili)
    app.component('VideoYoutube', Youtube)
    app.component('ReplitViewer', Replit)
    app.component('CodeSandboxViewer', CodeSandbox)
    app.component('Plot', Plot)
    app.component('CodeRepl', CodeRepl)
    app.component('CanIUseViewer', CanIUse)
    app.component('FileTreeItem', FileTreeItem)
  }
})
