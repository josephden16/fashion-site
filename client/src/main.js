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


// TODO: work on the links on the footer and header
// TODO: work on Error Pages when done
// TODO: work on description and haute_couture page
// TODO: add catalog error handling for incorreect page routing