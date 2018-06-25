import './firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router';
import VuejsDialog from "vuejs-dialog"

Vue.use(VueFire)
Vue.use(Vuetify)
Vue.use(VuejsDialog)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
