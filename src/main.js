import Vue from 'vue'
import App from './App.vue'
//importing globally
//import component1 from './components/component1.vue'
//Vue.component('c1',component1)
import VueResource from 'vue-resource'
import VModal from 'vue-js-modal'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
});

Vue.use(VModal);

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
  router:router,
}).$mount('#app')
