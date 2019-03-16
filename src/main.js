import Vue from 'vue'
import App from './App.vue'
//importing globally
//import component1 from './components/component1.vue'
//Vue.component('c1',component1)
import VueResource from 'vue-resource'
import VModal from 'vue-js-modal'

Vue.use(VModal);
Vue.use(VueResource);

export const globalStore = new Vue({
  data: {
    Val: '',
    Username: '',
    login:false
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
