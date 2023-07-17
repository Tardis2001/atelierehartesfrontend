import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import swal from 'sweetalert';

window.axios = require('axios')

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
