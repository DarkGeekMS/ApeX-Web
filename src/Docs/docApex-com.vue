<template>
  <div id="app">
    <elucidate :component = "c3" :example="example"></elucidate>


  </div>
</template>

<script>

// importing locally
import Vue from 'vue'
import Elucidate from 'vue-elucidate'
Vue.use(Elucidate)
import ApexCom from '../components/Apex-com.vue'


export default {
  // importing locally
  components:{
    'c3':ApexCom
  },
  name: 'app',
  data(){
    return{
      title:'title described',
      c3:ApexCom,
      example:{
        markup: '<ApexCom  size="small">Normal</ApexCom>',
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
