<template>
  <div id="HomePage" >
     <hotposts></hotposts>
     <DisplayPosts></DisplayPosts>



  </div>
</template>

<script>


import DisplayPosts from "./DisplayPosts.vue"
import hotposts from './HotPosts.vue'


export default {
  name: 'HomePage',
  components:{

    'hotposts':hotposts,
    'DisplayPosts':DisplayPosts,

  },
  }

</script>

<style scoped>


</style>
