import Vue from 'vue'
import axios from 'axios'
import iView from 'iview'

import App from './App'
import router from './router'
import store from './store'
import gt from './install'
import './filters'
import 'iview/dist/styles/iview.css'    // 使用 CSS

Vue.use(iView)
Vue.use(gt)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
