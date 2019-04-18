import Vue from 'vue'
import App from './App.vue'
//importing globally

import VueResource from 'vue-resource'
import VModal from 'vue-js-modal'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VModal);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
});


var vm = new Vue({
  localStorage: {
    login:{
      type: Boolean,
      default: false
    },
    userName:{
       type: String,
       default: ''
    },
    token:{
      type: String,
      default: ''
    },
    emailVal:{
      type: String,
      default: ''
    },
    error:{
      type: String,
      default: ''
    },
    search:{
      type: String,
      default: ''
    },
    baseUrl:{
      type:String,
      default:'http://35.232.3.8/'
    }
  }
})

Vue.config.productionTip = false

new Vue({render: h => h(App),router:router,}).$mount('#app')
