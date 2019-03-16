<template>
  <div id="app">
<<<<<<< HEAD
<<<<<<< HEAD
    <!-- <c11></c11> -->
    <!-- <document></document> -->
    <post></post>
    
    <c11></c11>
    <document></document>
  <!--  <navBar></navBar> -->
  <!-- <ApexCom></ApexCom> -->
=======
  <!--  <c11></c11>
    <document></document> -->
    <navBar></navBar>
>>>>>>> a0a384627848c90bd402e9b59ebd8ab6e80d17bb
=======
  <!--  <c11></c11>
    <document></document> -->
    <navBar></navBar>
>>>>>>> a0a384627848c90bd402e9b59ebd8ab6e80d17bb
  </div>
</template>

<script>

// importing locally
import Vue from 'vue'
import Elucidate from 'vue-elucidate'
Vue.use(Elucidate)
import "vue-elucidate/dist/style.css"
import docu from "./docu.vue"
import component1 from "./components/component1.vue"
import post from "./components/Post.vue"

import Nav from './components/navbar.vue'
import ApexCom from './components/Apex-com.vue'

export default {
  // importing locally
  components:{
    'c11':component1,
    'document':docu,
    'Post':post,
    'navBar': Nav,
    'ApexCom':ApexCom
  },
  name: 'app',
  data(){
    return{
      title:'title ',
      c11:component1,
      document:docu
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #DAE0E6;
  width:100%;
  height:710px
}
</style>
