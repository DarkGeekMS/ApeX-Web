<template>
  <div id="HomePage" >
     <!-- <hotposts></hotposts> -->
     <DisplayPosts :ApexComName="''"></DisplayPosts>



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
