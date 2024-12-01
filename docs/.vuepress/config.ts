import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: 'kylinBachelor',
      lang: 'zh-CN',
      description: '不积跬步无以至千里，不积小流无以成江海',
    },
    '/en/': {
      title: 'kylinBachelor',
      lang: 'en-US',
      description: 'Stay Hungry Stay Foolish',
    },
  },

  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://kylinBachelor.github.io',
      profile: {
      avatar: '/avatar.jpg',
      name: 'kylinBachelor',
      description: '不积跬步无以至千里，不积小流无以成江海',
      circle: true,
      location: '山东济南，中国',
      organization: '山东舜德创信软件有限公司',
      layout: 'right',
    },
    blog: {
      // 禁用分页
      // pagination: false,
      // 每页显示的文章数量
      pagination: 15,
    },
    editLink: false,  // 禁用编辑链接
    contributors: false, // 不显示贡献者
    // 完全禁用所有自动生成
    // autoFrontmatter: false,
    // 控制部分自动生成
    autoFrontmatter: {
      permalink: false, // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true, // 是否生成标题
    },
    // 加密
    encrypt: {
      rules: {
        'RESUME.md': '160507140137'
      }
    },

    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['shell', 'bash', 'typescript', 'javascript', 'java', 'yaml', 'yml', 'html', 'vue', 'sql', 'xml', 'dockerfile', 'bat', 'properties', 'jsx', 'powershell', 'tex', 'txt', 'tsx'],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
        include: true,
        chart: true,
        echarts: true,
        mermaid: true,
        flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        pdf: true,
        caniuse: true,
        plot: true,
        bilibili: true,
        youtube: true,
        icons: true,
        codepen: true,
        replit: true,
        codeSandbox: true,
        jsfiddle: true,
        repl: {
          go: true,
          rust: true,
          kotlin: true,
        },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
})
