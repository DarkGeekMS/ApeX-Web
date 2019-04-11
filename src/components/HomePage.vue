<template>
  <div id="HomePage" >
     <!-- <hotposts></hotposts> -->
     <DisplayPosts :ApexComName="''"></DisplayPosts>
     <SideBar> </SideBar>


  </div>
</template>

<script>

import DisplayPosts from "./DisplayPosts.vue"
import HomeSideBar from "./HomeSideBar.vue"

import hotposts from './HotPosts.vue'

export default {
  name: 'HomePage',
  components:{
    'hotposts':hotposts,
    'DisplayPosts':DisplayPosts,
    'SideBar':HomeSideBar,
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
