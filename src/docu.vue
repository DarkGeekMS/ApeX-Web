<template>
  <div id="app">
  <!-- <doc1></doc1> -->
  <docLog></docLog>

  </div>
</template>

<script>

// importing locally
import Vue from 'vue'
import Elucidate from 'vue-elucidate'
Vue.use(Elucidate)
import docComp1 from './Docs/docComp1.vue'
import docLogIn from './Docs/docLogIn.vue'



export default {
  // importing locally
  components:{
    'doc1':docComp1,
    'docLog': docLogIn
  },
  name: 'app',
  data(){
    return{
      title:'title described',
      doc1:docComp1,
      docLog: docLogIn

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
