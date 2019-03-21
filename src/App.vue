<template>
  <div id="app" >
    
  

<!-- <hotposts></hotposts> -->
     <navBar></navBar>

<!-- <hotposts></hotposts> -->

 <!-- <DisplayPosts></DisplayPosts> -->

<!-- <ApexCom></ApexCom> -->

  </div>
</template>

<script>

import Vue from 'vue'
//import Elucidate from 'vue-elucidate'
//Vue.use(Elucidate)
import "vue-elucidate/dist/style.css"
import docu from "./docu.vue"
import component1 from "./components/component1.vue"
import DisplayPosts from "./components/DisplayPosts.vue"
import NavBar from './components/NavBar.vue'
import ApexCom from './components/Apex-com.vue'
import hotposts from './components/HotPosts.vue'

export default {

  components:{
    'c11':component1,
    'document':docu,
    'navBar': NavBar,
    'ApexCom':ApexCom,
    'hotposts':hotposts,
    'DisplayPosts':DisplayPosts
  },
  name: 'app',
  data(){
    return{
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
  height:100%;
  min-width: 1000px;
}
</style>
