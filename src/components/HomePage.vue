<template>
  <div id="HomePage" >
     <nav-bar></nav-bar>
     <hotposts></hotposts>
     <DisplayPosts></DisplayPosts>



  </div>
</template>

<script>


import component1 from "./component1.vue"
import DisplayPosts from "./DisplayPosts.vue"
import NavBar from './NavBar.vue'
import hotposts from './HotPosts.vue'


export default {

  components:{
    'c11':component1,
    'navBar': NavBar,
    'hotposts':hotposts,
    'DisplayPosts':DisplayPosts,

  },
  name: 'app',
  data(){
    return{
      title:'title ',
      c11:component1,
      // document:docu,
    }
  }
}
</script>

<style scoped>


</style>
