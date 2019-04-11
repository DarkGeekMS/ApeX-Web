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

export default {
  name: 'HomePage',
  components:{
    'DisplayPosts':DisplayPosts,
    'SideBar':HomeSideBar,
  },
  data(){
    return{
      title:'title '
    }
  }
}

</script>

<style scoped>


</style>
