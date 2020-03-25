import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(vueResource)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
