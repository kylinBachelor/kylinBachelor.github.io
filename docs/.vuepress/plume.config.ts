import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/plume.svg',
  // your git repo url
  docsRepo: 'https://github.com/kylinBachelor/kylinBachelor.github.io',
  docsDir: 'docs',

  appearance: true,

  social: [
    { icon: 'github', link: '/' },
  ],

  locales: {
    '/': {
      profile: {
        avatar: '/plume.svg',
        name: '海阔天空',
        description: '<br><a style="color: red; font-weight: bold; font-style: italic;">躲天意，避因果。<br>诸般枷锁困真我。<br>顺天意，成因果。<br>今日方知我是我。<br>一朝悟道见真我，<br>何惧昔日旧枷锁。<br>世间枷锁本身梦，<br>无形无相亦无我。</a>',
        circle: true,
        // location: '',
        // organization: '',
      },
      outline: [1, 6],
      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: '/plume.svg',
        name: '海阔天空',
        description: 'Stay Hungry Stay Foolish',
        circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
