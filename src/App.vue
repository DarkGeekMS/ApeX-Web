<template>
  <div id="app">
    <!-- <c11></c11> -->
    <!-- <document></document> -->
    <post></post>

    <c11></c11>
    <document></document>
   <navBar></navBar>
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


export default {
  // importing locally
  components:{
    'c11':component1,
    'document':docu,
    'Post':post,
    'navBar': Nav

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
  text-align: center;
  color: #2c3e50;
  background-color: #DAE0E6;
  width:100%;
  height:710px
}
</style>
