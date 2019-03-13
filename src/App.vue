<template>
  <div id="app">
    <c11></c11>
    <document></document>
    
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




export default {
  // importing locally
  components:{
    'c11':component1,
    'document':docu
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
  margin-top: 60px;
}
</style>
