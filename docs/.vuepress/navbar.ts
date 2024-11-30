import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [
        { text: 'Java', link: '/notes/Java/README.md' },
        { text: 'Spring', link: '/notes/Spring/README.md' },
        { text: '数据库', link: '/notes/数据库/README.md' },  
        { text: 'Linux', link: '/notes/Linux/README.md' },
        { text: '设计模式', link: '/notes/设计模式/README.md' },
        { text: 'Web', link: '/notes/Web/README.md' }, 
        { text: 'Redis', link: '/notes/Redis/README.md' },
        { text: '消息队列', link: '/notes/MQ/README.md' },
        { text: 'Nginx', link: '/notes/Nginx/README.md' },
        { text: 'Docker', link: '/notes/Docker/README.md' },
        { text: 'Elasticsearch', link: '/notes/Elasticsearch/README.md' },
        { text: 'Emacs', link: '/notes/Emacs/README.md' },
        { text: '版本控制', link: '/notes/版本控制/README.md' },
        { text: 'Jenkins', link: '/notes/jenkins/README.md' },
        { text: 'K8S', link: '/notes/K8S/README.md' },
        { text: 'Windows', link: '/notes/Windows/README.md' },
        { text: 'Other', link: '/notes/Other/README.md' },
        { text: '示例', link: '/notes/demo/README.md' },
    ]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

