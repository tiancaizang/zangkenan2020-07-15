import Vue from 'vue'
import App from './App.vue'
import router from './router'
import utils from './http.js'
Vue.use(utils);

Vue.config.productionTip = false

new Vue({
  router,
  utils,
  render: h => h(App)
}).$mount('#app')
