import Vue from 'vue'
import App from './App.vue'
//importing globally
//import component1 from './components/component1.vue'
//Vue.component('c1',component1)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
