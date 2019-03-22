<template>
  <div id="app" >
    <navbar></navbar>
    <router-view></router-view>
 </div>
</template>

<script>

import Vue from 'vue'
//import Elucidate from 'vue-elucidate'
//Vue.use(Elucidate)
import "vue-elucidate/dist/style.css"
import docu from "./docu.vue"
import component1 from "./components/component1.vue"
import HomePage from "./components/HomePage.vue"
import navbar from "./components/navbar.vue"

export default {

  components:{
    'c11':component1,
    'document':docu,
    navbar
  },
  methods:{


  },
  name: 'app',
  data(){
    return{
      title:'title ',
      c11:component1,
      document:docu,

    }
  }
}
</script>

<style scoped>

#app {
  margin-top: 0px;
  min-width: 1200px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #DAE0E6;
    width:100%;
    height:100%;
}
</style>
