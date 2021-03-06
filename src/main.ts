import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/reset.css'
import '../src/assets/css/media.css'
import '../src/assets/fonts/style.css'
import axios from 'axios'
Vue.prototype.$axios = axios;
import './mock'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
