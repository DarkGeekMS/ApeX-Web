<template>
  <div id="app">
    <elucidate :component = "LogIn" :example="example"></elucidate>

  </div>
</template>

<script>

// importing locally 
import Vue from 'vue'
import Elucidate from 'vue-elucidate'
Vue.use(Elucidate)
import LogIn from '../components/DemoLoginModal.vue'

//import UiButton from 'keen-ui/Lib/UiButton'

export default {
  // importing locally
  components:{
    'LogIn':LogIn
  },
  name: 'app',
  data(){
    return{
      title:'title described',
      LogIn:LogIn,
      example:{
        markup: '<LogIn size="small">Normal</LogIn>'
      },
      props:{
        size: 'small'
      },
      methods:{
        sayhello(){
          console.log(hello);
        }
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
