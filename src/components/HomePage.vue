<template>
  <div id="HomePage" >
     <nav-bar></nav-bar>
     <hotposts></hotposts>
     <DisplayPosts></DisplayPosts>



  </div>
</template>

<script>


import DisplayPosts from "./DisplayPosts.vue"
import NavBar from './NavBar.vue'
import hotposts from './HotPosts.vue'


export default {
  name: 'HomePage',
  components:{

    'navBar': NavBar,
    'hotposts':hotposts,
    'DisplayPosts':DisplayPosts,

  },
  }

</script>

<style scoped>


</style>
