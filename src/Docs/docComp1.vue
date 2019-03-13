<template>
  <div id="app">
    <elucidate :component = "c1" :example="example"></elucidate>

    
  </div>
</template>

<script>

// importing locally 
import Vue from 'vue'
import Elucidate from 'vue-elucidate'
Vue.use(Elucidate)
import component1 from '../components/component1.vue'




export default {
  // importing locally
  components:{
    'c1':component1
  },
  name: 'app',
  data(){
    return{
      title:'title described',
      c1:component1,
      example:{
        markup: '<component1  size="small">Normal</component1>'
      }
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
