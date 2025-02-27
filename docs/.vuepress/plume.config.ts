import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://www.gongchengshi.online/plume.svg',
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
        avatar: 'https://www.gongchengshi.online/plume.svg',
        name: '攻城狮',
        description: '脱去皮囊，无非二百零六骨，穿上衣裳，可有一万八千相。',
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
        avatar: 'https://www.gongchengshi.online/plume.svg',
        name: '攻城狮',
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
