import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import axios from 'axios'
import { auth } from './firebase'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})


