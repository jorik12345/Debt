import './firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import router from './router';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(VueFire)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
