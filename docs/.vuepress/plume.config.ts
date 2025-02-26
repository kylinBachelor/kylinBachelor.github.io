import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
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
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: '攻城狮',
        description: '脱去皮囊，无非二百零六骨，穿上衣裳，可有一万八千相，观美人如白骨，使我无欲，观白骨如美人，使我无惧，君子当守正念，以养浩然之气，斩断色欲，利于不败，色而不淫，方为丈夫',
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
        avatar: 'https://theme-plume.vuejs.press/plume.png',
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
