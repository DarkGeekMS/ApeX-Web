<template>
  <div id="app" >
    <!-- <c11></c11> -->
    <!-- <document></document> -->
     <!-- <navBar></navBar> -->

<hotposts></hotposts>

<!-- <post></post> -->
<DisplayPosts></DisplayPosts>

  <!-- <OP></OP> -->

    <!-- <c11></c11> -->
    <!-- <document></document> -->
<!-- <ApexCom></ApexCom> -->

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
import Nav from './components/navbar.vue'
import ApexCom from './components/Apex-com.vue'
import hotposts from './components/HotPosts.vue'
// import OnePost from './components/DisplayOnePost.vue'
export default {

  components:{
    'c11':component1,
    'document':docu,
    'Post':post,
    'navBar': Nav,
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
