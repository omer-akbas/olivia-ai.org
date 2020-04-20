import Vue from 'vue'
import App from '@/App.vue'

import Resource from 'vue-resource'
import Buefy from 'buefy'
import '@/registerServiceWorker'
import router from '@/plugins/router'
import i18n from '@/plugins/i18n'

import 'bulma-timeline/dist/css/bulma-timeline.min.css'

Vue.use(Buefy)
Vue.use(Resource)
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
