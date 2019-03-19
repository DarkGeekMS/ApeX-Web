<template>
  <div id="app" >

<hotposts></hotposts>
     <nav-bar></nav-bar>

<!-- <hotposts></hotposts> -->

<!-- <post></post> -->
<!-- <DisplayPosts></DisplayPosts> -->


  <!-- <OP></OP> -->

    <!-- <c11></c11> -->
    <!-- <document></document> -->
<ApexCom></ApexCom>
<router-view></router-view>

  </div>
</template>

<script>

import Vue from 'vue'
import Elucidate from 'vue-elucidate'
Vue.use(Elucidate)
import "vue-elucidate/dist/style.css"
import docu from "./docu.vue"
import component1 from "./components/component1.vue"
import post from "./components/Post.vue"
import DisplayPosts from "./components/DisplayPosts.vue"
import NavBar from './components/NavBar.vue'
import ApexCom from './components/Apex-com.vue'
import hotposts from './components/HotPosts.vue'
// import OnePost from './components/DisplayOnePost.vue'
export default {

  components:{
    'c11':component1,
    'document':docu,
    'Post':post,
    'nav-bar': NavBar,
    'ApexCom':ApexCom,
    'hotposts':hotposts,
    'DisplayPosts':DisplayPosts
    // 'OP':OnePost
  },
  name: 'app',
  data(){
    return{
      title:'title ',
      c11:component1,
      document:docu,
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
}
</style>
