import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// TODO: work on the account page and make the sign up and login as tabs
// TODO: set up a mock api server to receive json data
// TODO: work on the links on the footer and header
// TODO: work on Error Pages when done