import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.less'
import CoolData from '../components/lib'
Vue.use(CoolData)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
