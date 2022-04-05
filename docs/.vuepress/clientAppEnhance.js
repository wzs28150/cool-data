import { defineClientAppEnhance } from '@vuepress/client'
import CoolData from '../../lib'
import "../../lib/css/index.css"
export default defineClientAppEnhance(({ app }) => {
  window.localStorage['vuepress-color-scheme'] = 'dark'
  app.use(CoolData)
})