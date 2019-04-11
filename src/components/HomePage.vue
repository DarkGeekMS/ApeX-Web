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
  name: 'app',
  data(){
    return{
      title:'title '
    }
  }
}

</script>

<style scoped>


</style>
