import Vue from 'vue'
import App from './App.vue'
//importing globally

import VueResource from 'vue-resource'
import VModal from 'vue-js-modal'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VModal);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
});

export const globalStore = new Vue({
  data: {
    Val: '',
    Username: '',
    login:false,
    token: '',
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
