import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/global.scss'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = true

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
