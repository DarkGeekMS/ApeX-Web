<template>
  <div id="app">
    <elucidate :component = "c2" :example="example"></elucidate>


  </div>
</template>

<script>

// importing locally
import Vue from 'vue'
import Elucidate from 'vue-elucidate'
Vue.use(Elucidate)
import Post from '../components/Post.vue'




export default {
  // importing locally
  components:{
    'c2':Post
  },
  name: 'app',
  data(){
    return{
      title:'title described',
      c2:Post,
      example:{
        markup: '<Post  size="small">Normal</Post>',

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
