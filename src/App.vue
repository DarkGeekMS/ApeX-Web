<template>
  <div id="app" >
    <navbar></navbar>
    <router-view></router-view>
 </div>
</template>

<script>
import Vue from 'vue'
import NavBar from "./components/NavBar.vue"


export default {
  name: 'app',
  components:{
    'navbar':NavBar,

  },
}
</script>

<style scoped>
#app {
  margin-top: 0px;
  min-width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #DAE0E6;
  min-height:1000px;
}


</style>
